import { Router, createRootRoute, createRoute } from '@tanstack/react-router'

// Import layouts
import RootLayout from '@/layouts/RootLayout'

// Import pages
import HomePage from '@/features/home/HomePage'
import ServicesPage from '@/features/ServicesPage'
import NotFoundPage from '@/features/NotFoundPage'
import PricingPage from '@/features/pricing/pricing-page'
import AboutPage from '@/features/about/about-page'
import ChangelogPage from '@/features/changelog/changelog-page'
import PrivacyPolicyPage from '@/features/privacy-policy/privacy-policy-page'
import TermsOfServicePage from '@/features/terms-of-service/terms-of-service-page'
import ContactPage from '@/features/contact/contact-page'
import RequestAccessPage from '@/features/request-access/request-access-page'
import WhyBroklePage from '@/features/why-brokle/why-brokle-page'
import PlatformPage from '@/features/platform/platform-page'
import SolutionsPage from '@/features/solutions/solutions-page'
import HomePage2 from '@/features/home/HomePage2'
import HomePage3 from '@/features/home/HomePage3'
import FeaturesPage from '@/features/features/features-page'
import EnterprisePage from '@/features/enterprise/enterprise-page'
import CareersPage from '@/features/careers/careers-page'

// Create root route with the main layout
const rootRoute = createRootRoute({
  component: RootLayout,
})

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const homeRoute2 = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home2',
  component: HomePage2,
})

const homeRoute3 = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home3',
  component: HomePage3,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
})

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: PricingPage,
})

const changelogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/changelog',
  component: ChangelogPage,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
})

const termsOfServiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-of-service',
  component: TermsOfServicePage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const requestAccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/request-access',
  component: RequestAccessPage,
})

const whyBroklePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-brokle',
  component: WhyBroklePage,
})

const platformRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/platform',
  component: PlatformPage,
})

const solutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions',
  component: SolutionsPage,
})

const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/features',
  component: FeaturesPage,
});

const enterpriseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/enterprise',
  component: EnterprisePage,
})

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: CareersPage,
})



const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
})

// Create and export the router
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  contactRoute,
  notFoundRoute,
  pricingRoute,
  aboutRoute,
  changelogRoute,
  privacyPolicyRoute,
  termsOfServiceRoute,
  requestAccessRoute,
  whyBroklePageRoute,
  platformRoute,
  solutionRoute,
  homeRoute2,
  homeRoute3,
  featuresRoute,
  enterpriseRoute,
  careersRoute
])

export const router = new Router({ routeTree })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}