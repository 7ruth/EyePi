import React from 'react';
<<<<<<< HEAD

import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
=======
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad

function Footer() {
  return (
    <Wrapper>
      <section>
<<<<<<< HEAD
        <LocaleToggle />
      </section>
=======
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section>
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
    </Wrapper>
  );
}

export default Footer;
