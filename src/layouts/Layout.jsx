export default function Layout({ children }) {
  // this component for layout of the web purpose
  return (
    <>
      <main className='grid place-items-center w-full h-screen'>{children}</main>
    </>
  )
}
