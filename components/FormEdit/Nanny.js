export const Detail = (
  <Form onSubmit={this.handleEditProfile}>
    <Row>
      <Col xs="12" md="6">
        <FormGroup row>
          <Label sm={12}>Firstname</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.firstName')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,firstName: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Lastname</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.lastName')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,lastName: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Nickname</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.nickName')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,nickName: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Age</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.age')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,age: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Birthday</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.birthDay')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,birthDay: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Address</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.address')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,address: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Mobile Number</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.mobile')}
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,mobile: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Passport Number</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.passportNo')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,passportNo: e.target.value}}})}/>
          </Col>
        </FormGroup>

      </Col>
      <Col xs="12" md="6">

        <FormGroup row>
          <Label sm={12}>Passport Expiration Date</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.passportExpirationDate')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,passportExpirationDate: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Visa Expiration Date</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.visaExpirationDate')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,visaExpirationDate: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Status</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.status')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,status: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Nationality</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.nationality')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,nationality: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Education</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.education')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,education: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Religion</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.religion')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,religion: e.target.value}}})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>How long have you stayed in thailand?</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.stayThaiTime')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,stayThaiTime: e.target.value}}})}/>
          </Col>
        </FormGroup>

        {/*<FormGroup row>
          <Label sm={12}>Language Spoken</Label>
          <Col sm={12}>
            <Input type="text" placeholder="" value={_.get(userEdit, 'detail.firstName')} 
              onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,firstName: e.target.value}}})}/>
          </Col>
        </FormGroup>*/}

      </Col>
    </Row>
  </Form>
)