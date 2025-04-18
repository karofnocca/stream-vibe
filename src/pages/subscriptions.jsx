import Plans from '@/layouts/Section/Plans'
import PlansComparison from '@/layouts/Section/PlansComparison'

export const metadata = {
  title: 'Subscriptions',
}

export default function () {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
