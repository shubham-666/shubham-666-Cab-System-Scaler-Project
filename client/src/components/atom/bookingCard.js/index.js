import React from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BookingCard = (props) => {
  const { ele, totalTime } = props;

  return (
    <div className={styles.booking__cab__card}>
      <div className={styles.booking__cab__card__img}>
        <img
          src={`${ele.cab_image}`}
          style={{ width: '100%', height: '100%' }}
          alt="car"
        />
      </div>
      <div className={styles.booking__cab__card__content}>
        <div className={styles.booking__cab__card__content__top}>
          <div className={styles.booking__cab__card__content__left}>
            <div className={styles.booking__cab__card__content__left__heading}>
              {ele.cab_name}
            </div>
            <div className={styles.booking__cab__card__content__left__heading__small}>
              {totalTime ? (
                <>{totalTime} min</>
              ) : (
                <>-</>
              )}
            </div>
          </div>
          <div className={styles.booking__cab__card__content__right}>
            <div className={styles.booking__cab__card__content__left__heading}>
              {totalTime * ele.cab_price}/-
            </div>
            <div className={styles.booking__cab__card__content__left__heading__small}>
              {ele.cab_price}/min
            </div>
          </div>
        </div>
        <div
          className={styles.booking__cab__card__content__bottom}
          onClick={() => {
            props.cabBookClicked(ele, totalTime * ele.cab_price, totalTime);
          }}
        >
          Book{'\u00A0'} <FontAwesomeIcon icon={faArrowRight} size="sm" className="nav__icon" />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
