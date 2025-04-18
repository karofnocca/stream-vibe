import MovieBannerCard from "@/components/MovieBannerCard"

const MovieBanner = () => {
    const titleId = "movie-banner__title"

    return (
        <section
        className="container"
        aria-labelledby={titleId}
        >
            <MovieBannerCard
             title="Kantara"
             TitleTag="h1"
             titleId={titleId}
             isSmallPaddingY
             description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
             imgSrc='/src/assets/images/movieBanner/2.jpg'
            />
        </section>
    )
    
}

export default MovieBanner