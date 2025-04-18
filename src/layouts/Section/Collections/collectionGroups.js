import categoryItems from "../Categories/categoryItems"

const collectionGroups = [
  {
    isActive: true,
    title: "Movies",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/actions/1.jpg",
              "/src/assets/images/categories/actions/2.jpg",
              "/src/assets/images/categories/actions/3.jpg",
              "/src/assets/images/categories/actions/4.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 38min",
            views: "23K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "21K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 08min",
            views: "18K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 15min",
            views: "16K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 45min",
            views: "20K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 30min",
            views: "2K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 30min",
            views: "2K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 30min",
            views: "2K",
          },
        ],
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/NewReleases/1.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/NewReleases/2.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/NewReleases/3.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/NewReleases/4.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/NewReleases/5.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
        ],
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/2.jpg",
            duration: "1h 59min",
            rating: {
              value: 4.6,
              label: "30K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/3.jpg",
            duration: "1h 47min",
            rating: {
              value: 4.7,
              label: "23K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/4.jpg",
            duration: "2h 07min",
            rating: {
              value: 5,
              label: "22K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "2h 17min",
            rating: {
              value: 4.8,
              label: "25K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
  {
    title: "Shows",
    items: [
      {
        title: "Our Genres 2",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/actions/1.jpg",
              "/src/assets/images/categories/actions/2.jpg",
              "/src/assets/images/categories/actions/3.jpg",
              "/src/assets/images/categories/actions/4.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1.jpg",
              "/src/assets/images/categories/adventure/2.jpg",
              "/src/assets/images/categories/adventure/3.jpg",
              "/src/assets/images/categories/adventure/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1.jpg",
              "/src/assets/images/categories/comedy/2.jpg",
              "/src/assets/images/categories/comedy/3.jpg",
              "/src/assets/images/categories/comedy/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1.jpg",
              "/src/assets/images/categories/drama/2.jpg",
              "/src/assets/images/categories/drama/3.jpg",
              "/src/assets/images/categories/drama/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Shows Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: "4 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/categories/Must/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
]

export default collectionGroups
