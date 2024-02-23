import { BsCurrencyDollar } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsShield } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
import Link from 'next/link'


export default function TravelCard({ image, title, cost, visa, digitalNomadVisa }) {
  return (
    <div className="column p-2 is-half-mobile is-one-quarter-desktop is-one-quarter-tablet is-one-quarter-widescreen">
      <div className="card m-2"  >
        <Link href={`/${title}`} className="has-text-black">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content pl-1">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <p className="title is-4">{title}</p>
                </div>
                <div className="level-item level-left">
                  <BsCurrencyDollar /> {cost}/mo
                </div>
              </div>
              <p className="is-size-6"><BsGlobe2 /> Visa required: {visa ? "Yes" : "No"}</p>
              <p> <BsWifi /> Wifi: 98 m/b </p>
              <p><BsShield /> safety 4/5 </p>
              

            </div>
          </div>
        </Link>
      </div>
    </div>

  )
}