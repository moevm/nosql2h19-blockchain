import React, { FC, useState } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { registrationRequest } from 'lib/modules/user/actions'
import Form from 'components/Form'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import styles from './styles'

interface OuterProps {}

interface DispatchProps {
  requestRegistration: (obj: Data.Registration) => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

const RegForm: FC<Props> = ({ classes, requestRegistration }) => {
  const [regForm, setRegForm] = useState<Data.Registration>({
    login: '',
    email: '',
    password: '',
    rPassword: ''
  })

  const onButtonClick = () => {
    requestRegistration(regForm)
  }

  return (
    <Form className={classes.form}>
      <Input
        className={classes.input}
        type="email"
        ph="E-mail"
        value={regForm.email}
        onInputChange={(email: string) => setRegForm({ ...regForm, email })}
      />
      <Input
        className={classes.input}
        ph="Login"
        value={regForm.login}
        onInputChange={(login: string) => setRegForm({ ...regForm, login })}
      />
      <Input
        className={classes.input}
        type="password"
        ph="Password"
        value={regForm.password}
        onInputChange={(password: string) => setRegForm({ ...regForm, password })}
      />
      <Input
        className={classes.input}
        type="password"
        ph="Repeat password"
        value={regForm.rPassword}
        onInputChange={(rPassword: string) => setRegForm({ ...regForm, rPassword })}
      />
      <SubmitButton className={classes.button} onSubmitButtonClick={onButtonClick}>
        Sign up
      </SubmitButton>
    </Form>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  requestRegistration: obj => dispatch(registrationRequest(obj))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(RegForm)
