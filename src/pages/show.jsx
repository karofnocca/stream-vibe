import Seasons from "@/components/Seasons"
import MovieDetails from "@/layouts/Section/MovieDetails"
import ShowBanner from "@/layouts/Section/ShowBanner"


export const metadata = {
  title: "Show - Stranger Things"
}


export default function () {
    return (
      <>
      <ShowBanner/>
      <MovieDetails
      seasons={<Seasons/>}
      />
      </>
      
        
    )
  }
  