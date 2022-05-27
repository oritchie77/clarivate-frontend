import './Main.scss'
import Thumbnail from "../Thumbnail/Thumbnail";
import {useState} from "react";

const Main = () => {

    const apiFetch = async (url) => {
        let data = await fetch('http://localhost:3001'+url)
        return await data.json()
    }

    const getClickCount = async (thumbnailId) => {
        let apiClickCount = await apiFetch(`/thumbnail?id=${thumbnailId}`)
        console.log(apiClickCount)
        return apiClickCount.clickCount
    }

    const setNewClickCount = async (thumbnailId, clickCount) => {
        await fetch('http://localhost:3001/thumbnail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "thumbnailId" : thumbnailId,
                "clickCount": clickCount
            })
        })
    }

    const incrementClickCount = async (thumbnailId) => {
        let clickCount = await getClickCount(thumbnailId)
        let incrementedClickCount = clickCount ++
        await setNewClickCount(thumbnailId, incrementedClickCount)
    }


    const handleExpandButtonClick = async (thumbnailId) => {
        if (!thumbnail1ExpandedStatus && thumbnailId === 1) {
            setThumbnail1ExpandedStatus(true)
            await incrementClickCount(thumbnailId)
        } else if (thumbnail1ExpandedStatus && thumbnailId === 1){
            setThumbnail1ExpandedStatus(false)
        }
        if (!thumbnail2ExpandedStatus && thumbnailId === 2) {
            setThumbnail2ExpandedStatus(true)
            await incrementClickCount(thumbnailId)
        } else if (thumbnail2ExpandedStatus && thumbnailId === 2){
            setThumbnail2ExpandedStatus(false)
        }
        if (!thumbnail3ExpandedStatus && thumbnailId === 3) {
            setThumbnail3ExpandedStatus(true)
            await incrementClickCount(thumbnailId)
        } else if (thumbnail3ExpandedStatus && thumbnailId === 3){
            setThumbnail3ExpandedStatus(false)
        }
        if (!thumbnail4ExpandedStatus && thumbnailId === 4) {
            setThumbnail4ExpandedStatus(true)
            await incrementClickCount(thumbnailId)
        } else if (thumbnail4ExpandedStatus && thumbnailId === 4){
            setThumbnail4ExpandedStatus(false)
        }

    }

    const [thumbnail1ExpandedStatus, setThumbnail1ExpandedStatus] = useState(false)
    const [thumbnail2ExpandedStatus, setThumbnail2ExpandedStatus] = useState(false)
    const [thumbnail3ExpandedStatus, setThumbnail3ExpandedStatus] = useState(false)
    const [thumbnail4ExpandedStatus, setThumbnail4ExpandedStatus] = useState(false)


    return (
        <main>
            <h1>Total knee replacements</h1>
            <h2>
                Total knee replacement (TKR) can restore knee function, and improve
                quality of life, but carries risks of complication post surgery
            </h2>
            <div className={'thumbnail-container'}>
                <Thumbnail
                    thumbnailId={1}
                    svg={<img className={'sixtyFive'} src={'sixtyfive.svg'}/>}
                    title={'Suboptimal in patients under 65'}
                    content={<p>Risks of revision surgery are especially pronounced in the younger patient who may be more physically active and, consequently, subject to multiple revision surgeries over a lifetime.</p>}
                    expanded={thumbnail1ExpandedStatus}
                    handleExpandButtonClick={handleExpandButtonClick}
                />
                <Thumbnail
                    thumbnailId={2}
                    svg={<img src={'knee.svg'}/>}
                    title={'Potential for long-term pain outcomes'}
                    content={<p>The proportion of patients with unfavorable long-term pain outcomes following TKR is reported between 10% and 34%.</p>}
                    expanded={thumbnail2ExpandedStatus}
                    handleExpandButtonClick={handleExpandButtonClick}
                />
                <Thumbnail
                    thumbnailId={3}
                    svg={<img src={'graph.svg'}/>}
                    title={'Increased risk of mortality'}
                    content={<p>The 30-day mortality rate for a total knee replacement is about 1 in 400.</p>}
                    expanded={thumbnail3ExpandedStatus}
                    handleExpandButtonClick={handleExpandButtonClick}
                />
                <Thumbnail
                    thumbnailId={4}
                    svg={<img src={'swirl.svg'}/>}
                    title={'Risk of complication'}
                    content={<p>Complications include:</p>}
                    unorderedList={<ul>
                        <li>Stiffness of the knee</li>
                        <li>Infection of the wound</li>
                        <li>Infection of the joint, needing further surgery Artery or nerve damage</li><li>DVT</li>
                        <li>Break in the bone around the knee replacement</li>
                        </ul>}
                    expanded={thumbnail4ExpandedStatus}
                    handleExpandButtonClick={handleExpandButtonClick}
                />

            </div>
        </main>
    )
}
export default Main