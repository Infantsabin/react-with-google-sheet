/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

import { useForm } from 'react-hook-form'

// react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";
// // plugin that creates slider
// import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Container,
  Card,
  CardImg,
  CardTitle,
  CardFooter,
  // CardGroup,
  // CardSubtitle,
  CardBody,
  CardDeck,
  Modal,
  Input,
  Form
} from 'reactstrap'

const GoogleSpreadsheet = require('google-spreadsheet')

const { promisify } = require('util')
const creds = require('../credentials/client_secret.json')
const courses = [
  {
    title: 'Form 1',
    image: 'https://gamedata.britishcouncil.org/sites/default/files/attachment/number-1_1.jpg'
  },
  {
    title: 'Form 2',
    image: 'https://gamedata.britishcouncil.org/sites/default/files/attachment/number-2_1.jpg'
  },
  {
    title: 'Form 3',
    image: 'https://gamedata.britishcouncil.org/sites/default/files/attachment/number-3_4.jpg'
  }
]

function RegForm () {
  const [liveDemo, setLiveDemo] = React.useState({ isOpen: false, course: 0 })

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async (data) => {
    data.form = currentCourse.title
    const doc = new GoogleSpreadsheet('1PohR39siaiaaCNbc2_V4xI7oMqxZNXvpEnY3smuuWOk', null, { gzip: false })

    await promisify(doc.useServiceAccountAuth)(creds)
    const info = await promisify(doc.getInfo)()

    const sheet = info.worksheets[0]

    await promisify(sheet.addRow)(data)
    setLiveDemo({ isOpen: false })
  }

  const currentCourse = courses[liveDemo.course]

  return (
    <>
      <div className='section-buttons' style={{ backgroundColor: '#d4d5d561' }}>
        <Container>
          <div>
            <br />
            <br />
            <br />
          </div>
          <Modal isOpen={liveDemo.isOpen} toggle={() => setLiveDemo({ isOpen: false })}>
            {currentCourse &&

            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className='modal-header'>
                <h5 className='modal-title ' id='exampleModalLiveLabel'>
                  <b>{currentCourse.title}</b>
                </h5>
                <button
                  aria-label='Close'
                  className='close'
                  data-dismiss='modal'
                  type='button'
                  onClick={() => setLiveDemo({ isOpen: false })}
                >
                  <span aria-hidden>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <label>Name</label>
                <Input name='name' placeholder='Name' type='text' innerRef={register({ required: true })} />
                {errors.name && <span style={{ color: '#f33816' }}>This field is required</span>}
                <br />
                <label>Email</label>
                <Input name='email' placeholder='Email' type='email' innerRef={register({ required: true })} />
                {errors.email && <span style={{ color: '#f33816' }}>This field is required</span>}
                <br />
                <label>Mobile Number</label>
                <Input name='number' placeholder='Mobile Number' type='text' innerRef={register({ required: true, maxLength: 10, minLength: 10, pattern: /^[6-9]\d{9}$/ })} />
                {errors.number && <span style={{ color: '#f33816' }}>This field is required</span>}
                <br />
                <div className='modal-footer'>
                  <div className='left-side'>
                    <Button
                      className='btn-link'
                      color='default'
                      data-dismiss='modal'
                      type='button'
                      onClick={() => setLiveDemo({ isOpen: false })}
                    >
              Cancel
                    </Button>
                  </div>
                  <div className='divider' />
                  <div className='right-side'>
                    <Button
                      className='btn-link'
                      color='info'
                      type='submit'
                      // onClick={() => {
                      // // setLiveDemo({ isOpen: false })
                      //   console.log('oc')
                      //   handleSubmit(onSubmit)
                      // }}
                    >
              Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Modal>
          <CardDeck>
            {courses.map((course, index) => {
              return (
                <Card key={index}>
                  <CardImg top width='100%' style={{ height: '244px' }} src={course.image} alt='Card image cap' />
                  <CardBody>
                    <CardTitle><b>{course.title}</b></CardTitle>
                  </CardBody>
                  <CardFooter>
                    <Button className='btn-round mr-1 text-center' color='info' type='button' onClick={() => setLiveDemo({ isOpen: true, course: index })}>Enroll</Button>
                  </CardFooter>
                </Card>
              )
            })}
          </CardDeck>
          <div>
            <br />
            <br />
            <br />
          </div>
        </Container>
      </div>
    </>
  )
}

export default RegForm
