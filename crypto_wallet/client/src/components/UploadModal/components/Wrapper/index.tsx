import React, { FC, ReactNode, FormEvent } from 'react'
import cn from 'classnames'
import withStyles, { JSSProps } from 'react-jss'

import compose from 'lib/utils/compose'
import SubmitButton from 'components/SubmitButton'
import styles from './styles'

interface OuterProps {
  className?: string
  active: boolean
  title: string
  text?: string
  children: ReactNode
  onCloseClick: () => void
  onSubmitClick: (e: FormEvent) => void
}

interface Props extends OuterProps, JSSProps<typeof styles> {}

const Wrapper: FC<Props> = ({
  classes,
  className,
  title,
  text,
  active,
  children,
  onCloseClick,
  onSubmitClick
}) => (
  <div className={cn(classes.wrapper, active && classes.wrapperActive, className)}>
    <div className={classes.wrapperBg} onClickCapture={onCloseClick} />
    <section className={classes.modal}>
      <h3 className={classes.title}>{title}</h3>
      <form className={classes.form} onSubmit={onSubmitClick}>
        {children}
        <p className={classes.help}>
          {text ? text : `Размер загружаемого файла не должен превышать 10мб.`}
        </p>
        <SubmitButton className={classes.submitButton} type="submit">
          Загрузить
        </SubmitButton>
      </form>
      <button
        className={classes.closeButton}
        aria-label="кнопка для закрытия модального окна"
        onClick={onCloseClick}
      >
        x
      </button>
    </section>
  </div>
)

export default compose<Props, OuterProps>(withStyles(styles))(Wrapper)
