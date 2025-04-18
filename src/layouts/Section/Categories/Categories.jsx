import Section from '@/layouts/Section'
import CategoryCard from '@/components/CategoryCard'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'

const Categories = () => {
  const categoryItems = [
    {
      title: 'Action',
      images: [
        '/src/assets/images/categories/actions/1.jpg',
        '/src/assets/images/categories/actions/2.jpg',
        '/src/assets/images/categories/actions/3.jpg',
        '/src/assets/images/categories/actions/4.jpg',
      ],
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories/adventure/1.jpg',
        '/src/assets/images/categories/Adventure/2.jpg',
        '/src/assets/images/categories/Adventure/3.jpg',
        '/src/assets/images/categories/Adventure/4.jpg',
      ],
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories/comedy/1.jpg',
        '/src/assets/images/categories/comedy/2.jpg',
        '/src/assets/images/categories/comedy/3.jpg',
        '/src/assets/images/categories/comedy/4.jpg',
      ],
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories/drama/1.jpg',
        '/src/assets/images/categories/drama/2.jpg',
        '/src/assets/images/categories/drama/3.jpg',
        '/src/assets/images/categories/drama/4.jpg',
      ],
    },
    {
      title: 'Horror',
      images: [
        '/src/assets/images/categories/horror/1.jpg',
        '/src/assets/images/categories/horror/2.jpg',
        '/src/assets/images/categories/horror/3.jpg',
        '/src/assets/images/categories/horror/4.jpg',
      ],
    },
    {
      title: 'Action',
      images: [
        '/src/assets/images/categories/actions/1.jpg',
        '/src/assets/images/categories/actions/2.jpg',
        '/src/assets/images/categories/actions/3.jpg',
        '/src/assets/images/categories/actions/4.jpg',
      ],
    },
    {
      title: 'Adventure',
      images: [
        '/src/assets/images/categories/adventure/1.jpg',
        '/src/assets/images/categories/Adventure/2.jpg',
        '/src/assets/images/categories/Adventure/3.jpg',
        '/src/assets/images/categories/Adventure/4.jpg',
      ],
    },
    {
      title: 'Comedy',
      images: [
        '/src/assets/images/categories/comedy/1.jpg',
        '/src/assets/images/categories/comedy/2.jpg',
        '/src/assets/images/categories/comedy/3.jpg',
        '/src/assets/images/categories/comedy/4.jpg',
      ],
    },
    {
      title: 'Drama',
      images: [
        '/src/assets/images/categories/drama/1.jpg',
        '/src/assets/images/categories/drama/2.jpg',
        '/src/assets/images/categories/drama/3.jpg',
        '/src/assets/images/categories/drama/4.jpg',
      ],
    },
    {
      title: 'Horror',
      images: [
        '/src/assets/images/categories/horror/1.jpg',
        '/src/assets/images/categories/horror/2.jpg',
        '/src/assets/images/categories/horror/3.jpg',
        '/src/assets/images/categories/horror/4.jpg',
      ],
    },
    
  ]

  const sliderNavigationId = 'categories-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationId}
        />
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories
