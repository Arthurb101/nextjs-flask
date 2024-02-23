import prisma from '../../lib/prisma';
import { BsCurrencyDollar } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
import Link from 'next/link'

const citiesInCountry = async (countryName) => {


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
        return []
    }

};

export default async function countryGuide({ params }: { params: { country: string } }) {
    const country_name = params.country

    const data = await citiesInCountry(country_name);
    const cities = data?.city


    return (
        <div className="container is-max-widescreen">
            <div className="title">{data?.name}</div>
            <p><BsCurrencyDollar /> {data?.cost}/mo  <BsGlobe2 /> Visa required: {data?.visa ? "Yes" : "No"}
                <BsWifi /> Wifi: 98 m/b <BsShield /> safety 4/5
            </p>
            <div className="columns">
                <div className="column is-two-thirds">
                    <figure className="image ">
                        <img className="radius-large round-edges" src={data?.image} />
                    </figure>

                </div>
                <div className="column">
                    <h1 className="title"> great info about the country</h1>
                    <p>
                        Megacity Tokyo fully engages the senses with its mix of modern bustle and traditional tranquility. But before jetting off to Kyoto or further afield, allow yourself to discover Kanto's hot spring resorts, unspoiled mountain gorges, pristine beaches, UNESCO World Heritage sites and cultural treasures. The diverse port city of Yokohama and the immersive nature of Gunma, Saitama and Ibaraki are right on Tokyo's doorstep. The volcanic Ogasawara Islands offer a subtropical getaway with endemic wildlife and clear water. Kanto's culinary options are as varied as the landscape—restaurants serving cuisine from every corner of the globe abound at every price point
                    </p>
                </div>
            </div>
            <div className="section">
                <div className='title'> country cities</div>
                <div className="columns is-multiline">
                    {cities?.map((city) => (
                        <div className='column is-one-quarter'>
                            <Link href={`/${country_name}/${city?.name}`} className="has-text-black">
                                <div className='card'>
                                    <div className='card-image'>
                                        <img className='round-edges' src={city?.image} />
                                    </div>
                                    <div className="card-content is-overlay has-text-white has-text-weight-bold has-text-outline is-size-3">
                                        {city?.name}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
