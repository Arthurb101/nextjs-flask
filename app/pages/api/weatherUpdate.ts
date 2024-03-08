import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

const fetch = require('node-fetch');

async function updateCityTemperatures() {
    try {
      const cities = await prisma.city.findMany();
      
      for (const city of cities) {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Get the temperatures for the first day only
        const maxTemp = data.daily.temperature_2m_max[0];
        const minTemp = data.daily.temperature_2m_min[0];
        
        // Update city's temperatures in the database
        const updatedCity = await prisma.city.update({
          where: { id: city.id },
          data: {
            // @ts-ignore
            daily_hi_temp: maxTemp,
            daily_low_temp: minTemp
          }
        });
        
        console.log(`Updated temperatures for city ${updatedCity.name}`);
      }
    } catch (error) {
      console.error('Error updating city temperatures:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  

export default async function handler() {
    console.log("starting update")

    await updateCityTemperatures()
    console.log("ran cron job succesfully")
    

    return NextResponse.json({
        status: 200
      })
}