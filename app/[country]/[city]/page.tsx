import prisma from '../../lib/prisma';
import { BsCurrencyDollar } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";

const citiesInCountry = async (countryName) => {


    try {
        const result = await prisma.city.findUnique({
            where: {
                name: countryName,
            }
        });
        return result
    } catch (error) {
        console.error('Error fetching data:', error);
        return []
    }

};

export default async function countryGuide({ params }: { params: { country: string } }) {
    const country_name = params.country


    return (
        <div className="container is-max-widescreen">
            <div className="title">{data?.name}</div>
           
            <div className="section">

                <figure className="image ">
                    <img className="radius-large round-edges" src={data?.image} />
                </figure>
                <div className="level is-mobile">
                <div className="level-left" ><BsCurrencyDollar />{data?.cost}/mo</div>
                <div className="level-right" > <BsWifi /> Wifi: 98 m/b </div>
                </div>
            </div>
            <div className="section">
            <p>  <BsGlobe2 /> Visa required: {data?.visa ? "Yes" : "No"}</p>
                <p> <BsShield /> safety 4/5 </p>
            
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
