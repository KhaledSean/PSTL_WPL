import { Component } from "react";

class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            username: props.username,
            firstCurrencie: "",
            secondCurrencie: "",
            currencyToSell: "",
            currencyToBuy: "",
            exchangeRate: "",
            amount: "",
            location: "",
            currencies: ["EUR", "CAD", "HKD", "ISK", "PHP", "DKK", "HUF",
                "AUD", "RON", "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "CZK",
                "JPY", "THB", "CHF", "TRY", "CNY", "NOK", "SGD", "PLN", "BGN",
                "MXN", "ILS", "GBP", "NZD", "ZAR", "USD", "KRW", "MYR"]
        }
        this.canBeSubmitted = this.canBeSubmitted.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }


    clearForm() {
        this.setState({
            currencyToSell: "",
            currencyToBuy: "",
            exchangeRate: "",
            amount: "",
            location: ""
        })
    }

    canBeSubmitted() {
        return (
            this.state.userId.length > 0
            && this.state.sessionKey.length > 0
            && this.state.username.length > 0
            && this.state.currencyToSell.length > 0
            && this.state.currencyToBuy.length > 0
            && this.state.exchangeRate.length > 0
            && this.state.amount.length > 0
            && this.state.location.length > 0
        )
    }
    render() {
        return (
            <Container className="signupform">
                <div className="signupContainer" class="shadow p-3 mb-5 bg-white rounded">
                    <Form>
                        <FormGroup row>
                            <Label sm={3}>First name</Label>
                            <Col sm={9}>
                                <Input type="text" name="firstnamePatient"
                                    placeholder="Please type your first name"
                                    value={this.state.firstname}
                                    onChange={(evt) => { this.setState({ firstname: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Last name</Label>
                            <Col sm={9}>
                                <Input type="text" name="lastnamePatient"
                                    placeholder="Please type your last name"
                                    value={this.state.lastname}
                                    onChange={(evt) => { this.setState({ lastname: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Age</Label>
                            <Col sm={9}>
                                <Input
                                    type="number" name="age"
                                    value={this.state.birthdate}
                                    onChange={(evt) => { this.setState({ birthdate: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Age</Label>
                            <Col sm={9}>
                                <Input
                                    type="text" name="age"
                                    value={this.state.birthdate}
                                    onChange={(evt) => { this.setState({ birthdate: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Age</Label>
                            <Col sm={9}>
                                <Input
                                    type="text" name="age"
                                    value={this.state.birthdate}
                                    onChange={(evt) => { this.setState({ birthdate: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Age</Label>
                            <Col sm={9}>
                                <Input
                                    type="text" name="age"
                                    value={this.state.birthdate}
                                    onChange={(evt) => { this.setState({ birthdate: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>Age</Label>
                            <Col sm={9}>
                                <Input
                                    type="text" name="age"
                                    value={this.state.birthdate}
                                    onChange={(evt) => { this.setState({ birthdate: evt.target.value }) }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Email</Label>
                            <Col sm={9}>
                                <InputGroup>
                                    <Input type="email" name="email"
                                        placeholder="Please type your email adress"
                                        value={this.state.email}
                                        onChange={(evt) => { this.setState({ email: evt.target.value }) }} />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>@example.com</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Username</Label>
                            <Col sm={9}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="username"
                                        placeholder="Please choose a username"
                                        value={this.state.username}
                                        onChange={(evt) => { this.setState({ username: evt.target.value }) }} />
                                </InputGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3}>Password</Label>
                            <Col sm={9}>
                                <Input type="password" name="password"
                                    placeholder="Please type your password"
                                    value={this.state.password}
                                    onChange={(evt) => { this.setState({ password: evt.target.value }) }} />
                            </Col>
                        </FormGroup>
                    </Form>
                    <ButtonToggle className="signupBtn" type="submit"
                        style={{ float: 'right' }}
                        onClick={this.handleSubmit} >Signup</ButtonToggle>
                </div>
            </Container>
        )
    }

}
export default Patient;