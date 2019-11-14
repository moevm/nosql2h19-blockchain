import React, { FC, useState } from 'react'
import withStyles, { JSSProps } from 'react-jss'
import { connect, MapDispatchToProps } from 'react-redux'

import compose from 'lib/utils/compose'
import { authorizationRequest } from 'lib/modules/user/actions'
import Form from 'components/Form'
import Input from 'components/Input'
import SubmitButton from 'components/SubmitButton'
import styles from './styles'

interface OuterProps {}

interface DispatchProps {
  requestAuthorization: (obj: Data.Authorization) => void
}

interface Props extends OuterProps, DispatchProps, JSSProps<typeof styles> {}

const AuthForm: FC<Props> = ({ classes, requestAuthorization }) => {
  const [authForm, setAuthForm] = useState<Data.Authorization>({ login: '', password: '' })

  const onButtonClick = () => {
    requestAuthorization(authForm)
  }

  return (
    <Form className={classes.form}>
      <Input
        className={classes.input}
        autoComplete="username"
        placeholder="Login"
        value={authForm.login}
        onChange={e => setAuthForm({ ...authForm, login: e.target.value })}
      />
      <Input
        className={classes.input}
        autoComplete="password"
        type="password"
        placeholder="Password"
        value={authForm.password}
        onChange={e => setAuthForm({ ...authForm, password: e.target.value })}
      />
      <SubmitButton className={classes.button} onSubmitButtonClick={onButtonClick}>
        Sign in
      </SubmitButton>
    </Form>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = dispatch => ({
  requestAuthorization: obj => dispatch(authorizationRequest(obj))
})

export default compose<Props, OuterProps>(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(AuthForm)
