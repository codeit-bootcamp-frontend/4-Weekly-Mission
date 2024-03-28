import { useEffect, useRef, useState } from 'react';
import Cta from '@/components/cta/Cta';
import styles from './UiLinkForm.module.scss';
import classNames from 'classnames/bind';
import { FormEvent } from 'react';
import Image from 'next/image';

type LinkFormType = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  disableLinkForm: boolean;
};

const cx = classNames.bind(styles);

export const UiLinkForm = ({ onSubmit, disableLinkForm }: LinkFormType) => {
  const [moveLinkForm, setMoveLinkForm] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  useEffect(() => {
    const observerForm = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setMoveLinkForm('moved');
        }
      });
    });

    const observerDiv = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMoveLinkForm('');
        }
      });
    });

    if (formRef.current) {
      observerForm.observe(formRef.current);
    }

    if (divRef.current) {
      observerDiv.observe(divRef.current);
    }

    return () => {
      if (formRef.current) {
        observerForm.unobserve(formRef.current);
      }

      if (divRef.current) {
        observerDiv.unobserve(divRef.current);
      }
    };
  }, [disableLinkForm, moveLinkForm]);

  console.log(disableLinkForm);

  return (
    <>
      {!disableLinkForm ? (
        <div className={cx('container', `${moveLinkForm}`)}>
          <form className={cx('form')} onSubmit={handleSubmit} ref={formRef}>
            <div className={cx('input-box')}>
              <Image
                className={cx('icon')}
                src="/images/link.svg"
                alt="링크 아이콘"
                width={42}
                height={42}
              />
              <input className={cx('input')} type="text" placeholder="링크를 추가해 보세요" />
            </div>
            <button className={cx('button')} type="submit">
              <Cta>추가하기</Cta>
            </button>
          </form>
        </div>
      ) : null}
      {moveLinkForm !== '' ? <div className={cx('form-moved')} ref={divRef}></div> : null}
    </>
  );
};

export default UiLinkForm;
