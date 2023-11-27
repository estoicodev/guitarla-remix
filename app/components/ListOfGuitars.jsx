import Guitar from "./Guitar"

const ListOfGuitars = ({guitars}) => {
  return (
    <>
      {guitars?.length
        ? <div className="guitars-grid">
            {guitars?.map((guitar) => (
              <Guitar guitar={guitar.attributes} key={guitar.id} />
            ))}
          </div>
        : null
      }
    </>
)
}

export default ListOfGuitars
