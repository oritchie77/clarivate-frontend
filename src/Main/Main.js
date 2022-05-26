import './Main.scss'
import Thumbnail from "../Thumbnail/Thumbnail";
import {useEffect, useState} from "react";

const [Thumbnail1ExpandedStatus, setThumbnail1ExpandedStatus] = useState()

const Main = () => {
    return (
        <main>
            <h1>Total knee replacements</h1>
            <h2>
                Total knee replacement (TKR) can restore knee function, and improve
                quality of life, but carries risks of complication post surgery
            </h2>
            <div className={'thumbnail-container'}>
                <Thumbnail
                    svg={<img src={'sixtyfive.svg'}/>}
                    title={'Suboptimal in patients under 65'}
                    content={<p>Risks of revision surgery are especially pronounced in the younger patient who may be more physically active and, consequently, subject to multiple revision surgeries over a lifetime.</p>}
                    expanded={true}
                />
                <Thumbnail
                    svg={<img src={'knee.svg'}/>}
                    title={'Potential for long-term pain outcomes'}
                    content={<p>The proportion of patients with unfavorable long-term pain outcomes following TKR is reported between 10% and 34%.</p>}
                    expanded={false}
                />
                <Thumbnail
                    svg={<img src={'graph.svg'}/>}
                    title={'Increased risk of mortality'}
                    content={<p>The 30-day mortality rate for a total knee replacement is about 1 in 400.</p>}
                    expanded={false}
                />
                <Thumbnail
                    svg={<img src={'swirl.svg'}/>}
                    title={'Risk of complication'}
                    content={<ul>Complications include:<li>Stiffness of the knee</li><li>Infection of the wound</li><li>Infection of the joint, needing further surgery Artery or nerve damage</li><li>DVT</li><li>Break in the bone around the knee replacement</li></ul>}
                    expanded={false}
                />

            </div>
        </main>
    )
}
export default Main