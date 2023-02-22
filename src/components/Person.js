function Person(props) {
  const { firstName, lastName, email, ip_address } = props
  return (
    <div className="card">
      <img src={ip_address} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person
