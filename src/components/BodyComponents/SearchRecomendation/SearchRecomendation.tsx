export function SearchRecomendation(){
    const videoCardValues= [
        {
            linkUrl: "https://www.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Create%20a%20Video%20Background%20With%20CSS.jpeg",
            title : "Godzilla x Kong: The New Empire | Official Trailer 2",
            channel : "Tommorowland",
            Views : "14 Lakh",
            uploadedTime : "6 Months Ago"
        },
        {
            linkUrl: "https://blog.hubspot.com/hubfs/css-wordwrap.webp",
            title : "Godzilla x Kong: The New Empire | Official Trailer 1",
            channel : "Warner Hoes",
            Views : "2 Lakh",
            uploadedTime : "1 Year Ago"
        },
        {
            linkUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_640.jpg",
            title : "HARDWELL LIVE @ ULTRA MUSIC FESTIVAL MIAMI 2023",
            channel : "Hardwell",
            Views : "2.5 Lakh",
            uploadedTime : "2 Year Ago"
        },
        {
            linkUrl: "https://cdn.pixabay.com/photo/2012/12/27/19/40/chain-link-72864_640.jpg",
            title : "Cypher, what the f*ck is that tripwire?",
            channel : "Cypher",
            Views : "1 Lakh",
            uploadedTime : "3 Year Ago"
        },
        {
            linkUrl: "https://cdn.pixabay.com/photo/2013/12/11/03/13/puzzle-226743_640.jpg",
            title : "Hardwell - Main Stage - Mysteryland 2023",
            channel : "Hardwell",
            Views : "10 Lakh",
            uploadedTime : "4 Year Ago"
        },
        {
            linkUrl: "data:image/jpeg;base64,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",
            title : "2010s roadtrip mix ~nostalgia playlist",
            channel : "Mobu",
            Views : "10 Crore",
            uploadedTime : "1 Day Ago"
        },
]
    return (
        <div>
            <SearchTypes />
            {videoCardValues.map((obj)=>(
                <VideoRecomendationCard 
                title={obj.title} 
                channel={obj.channel} 
                views={obj.Views} 
                uploadedTime={obj.uploadedTime} 
                linkUrl={obj.linkUrl} 
                />
            ))}
        </div>
    )
}

function SearchTypes(){
    const values = ["All","From Mobu","Mobu","Noleen","Abhisht"] 
    return (
        <div className="flex flex-wrap">
            {values.map((val)=>(
                <SearchTypesCardButton buttonVal={val}/>
            ))}
        </div>
    )
}

function SearchTypesCardButton({buttonVal} : any){
    return (
        <div>
            <button className="flex mb-3 content-center justify-center pt-1 text-white bg-stone-800 hover:bg-stone-900 font-medium rounded text-m px-4 py-2 me-3 dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-stone-700 dark:border-stone-700">
                {buttonVal}
            </button>
        </div>
    )
}


function VideoRecomendationCard({linkUrl,title,channel,views,uploadedTime} : any){
    return (
        <div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-stone-900 dark:hover:bg-stone-800 mb-3">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={linkUrl} alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title} </div>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{channel} </p>
                    <div className="flex">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{views} ~ &nbsp;</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{uploadedTime} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
