import "./Profile.css"

export default function Profile() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-end">
            <img src="profile.jpg" alt="" style={{ width: '8rem', height: '8rem', borderRadius: '50%' }} />
          </div>
          <div className="col-8">
            <h1 className="m-0">Vict0rTesla</h1>
            <p className="mb-2">Software Developer</p>
            <ul className="contact-lists d-flex ps-0">
              <li className="contact-list"><a href=""><i class="fa-solid fa-envelope"></i></a></li>
              <li className="contact-list"><a href=""><i class="fa-brands fa-github"></i></a></li>
              <li className="contact-list"><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
              <li className="contact-list d-flex align-items-center"><i class="fa-solid fa-phone default" /><i class="fa-solid fa-phone-slash hover" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
