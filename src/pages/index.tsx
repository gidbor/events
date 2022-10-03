import PageLayout from "@components/Templates/page-layout";

const Home = () => {
  return (
    <PageLayout title="Events - Home">
      {/* TODO */} 
      <div className="block w-full">
        <div className="block w-full bg-white">
          <section className='flex justify-between items-center max-w-4xl m-auto pt-8 pb-4'>
            <div className="nav-user__menu">🍔 Gol de Oro</div>
            <div className="">Arturo Garcia 👱</div>
          </section>
        </div>
        <div className="block w-full bg-gray-100">
          <div className="flex max-w-4xl m-auto items-center h-80 flex-col justify-end">
            <h3 className="mb-8 font-bold text-2xl">Eventos | Torneos | Equipos</h3>
            <form className="mb-8 gap-2 flex">
              <style jsx>{`
              .select-search-input,
              .button-search-input {
                border: 1px solid #7e7e7e;
                border-radius: 0.5em;
                padding: 8px 12px;
                width: 300px;
              }
              `}</style>
              <select name="" id="" className="select-search-input">
                <option value="">Select Category</option>
              </select>
              <select name="" id=""  className="select-search-input">
                <option value="">Select Location</option>
              </select>
              <button className="button-search-input bg-gray-400 text-white">Search</button>
            </form>
          </div>
        </div>
      </div>
      {/* fin TODO */}
    </PageLayout>
  )
}

export default Home;
