import prisma from '../../../lib/prisma';
import { BsCurrencyDollar } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";

const citiesInCountry = async (countryName: string) => {

    try {
        const result = await prisma.country.findUnique({
            where: {
                name: countryName,
            },
            include: {
                city: true,
            },
        });
        return result
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }

};

export default async function countryGuide({ params }: { params: { country: string, city: string } }) {
    console.log({ params })
    const cityName = decodeURI(params.city)
    const countryName = params.country

    const data = await citiesInCountry(countryName);
    let city = {}
    let country = {}
    if (data != null) {

        {/* 
// @ts-ignore */}
        city = data.city.find((city) => city.name === cityName);
        country = data
        console.log(city)
    }


    return (
        <div className="container is-max-widescreen">
            {/* 
// @ts-ignore */}
            <div className="title">{city?.name}</div>

            <div className="section">

                <figure className="image ">
                    {/* 
// @ts-ignore */}
                    <img className="radius-large round-edges" src={city?.image} />
                </figure>
                <div className="level is-mobile">
                    {/* 
// @ts-ignore */}
                    <div className="level-left" ><BsCurrencyDollar /><div className='has-text-weight-semibold'>{city?.cost}</div>/mo</div>
                    <div className="level-right" > <BsWifi />   <div className='has-text-weight-semibold'>Wifi</div>: 98 m/b </div>
                </div>
            </div>
            <div className="section">
                {/* 
// @ts-ignore */}
                
                    <div>  <BsGlobe2 /> Visa required: {country?.visa ? "Yes" : "No"}</div>
                    <div className='mt-3'> <BsShield /> safety 4/5 </div>
                
            </div>
            <div className="section">
                <h1 className="title"> great info about the country</h1>
                <p>
                    Megacity Tokyo fully engages the senses with its mix of modern bustle and traditional tranquility. But before jetting off to Kyoto or further afield, allow yourself to discover Kanto's hot spring resorts, unspoiled mountain gorges, pristine beaches, UNESCO World Heritage sites and cultural treasures. The diverse port city of Yokohama and the immersive nature of Gunma, Saitama and Ibaraki are right on Tokyo's doorstep. The volcanic Ogasawara Islands offer a subtropical getaway with endemic wildlife and clear water. Kanto's culinary options are as varied as the landscape—restaurants serving cuisine from every corner of the globe abound at every price point
                </p>
            </div>
        </div>
    )
}
