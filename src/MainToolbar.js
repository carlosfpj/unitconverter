function MainToolbar ({titulo}) {

  const title = titulo;

  function toUpperCase(title) {
    return title.toUpperCase();
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-white">
      <div className="h-16 p-3">
        <h3 className="text-white text-2xl ml-10">PÁGINA DE {toUpperCase(title)}</h3>
      </div>
    </div>
  )
}

export default MainToolbar;