import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <div className="min-h-full"></div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"></div>
        {children}
      </main>
    </>
  );
}
