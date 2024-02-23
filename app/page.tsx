import TravelCard from './components/travelCard'
import prisma from '../lib/prisma';



const fetchCountries = async () => {
  try {
    const feed = await prisma.country.findMany()

    return feed
  } catch (error) {
    console.error('Error fetching data:', error);
    return []
  }
};

export default async function Home() {

  const data = await fetchCountries();
  console.log({ data })
  const gap = {
    gap: "10px"
  };

  return (
    <>
      <div>
        <div className="container has-background-white">
          <div className="columns is-multiline is-mobile" >
            {data.map((country) => (

              <TravelCard image={country.image} title={country.name} cost={country.cost} visa={country.visa_required} digitalNomadVisa={country.digital_nomad_visa_required} />

            ))}
          </div>
        </div>
      </div>
    </>
  )
}
