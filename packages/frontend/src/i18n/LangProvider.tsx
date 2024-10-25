import React, { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '.'

const LangProvider = ({ children }: PropsWithChildren) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>

export default LangProvider
