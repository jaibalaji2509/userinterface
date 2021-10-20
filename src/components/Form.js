import React from 'react'
import "../components/Form.css"

function Form() {
    return (
        <div>
            <h3>Jai Bala Form</h3>
<div class="container">
              <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
      <option value="usa">India</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <input type="submit" value="Submit" style={{marginLeft:"520px"}}/>
  </div>
  </form>
  </div>
        </div>
    )
}

export default Form
