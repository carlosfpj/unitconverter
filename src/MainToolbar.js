function MainToolbar (props) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-white">
      <div className="h-16">
        <h3>Página de {props.titulo}</h3>
      </div>
    </div>
  )
}

export default MainToolbar;