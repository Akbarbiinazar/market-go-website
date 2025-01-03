export const ArrowIcon = ({
  isActive,
  side,
}: {
  isActive: boolean;
  side: 'left' | 'right';
}) => {
  return side === 'left' ? (
    <svg
      width='20'
      height='10'
      viewBox='0 0 20 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.4'
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.395784 4.30556C0.196173 4.54035 0.196173 4.92103 0.395784 5.15583L3.64867 8.98206C3.84828 9.21686 4.17192 9.21686 4.37153 8.98206C4.57114 8.74727 4.57114 8.36659 4.37153 8.13179L1.99122 5.33193L19.1583 5.33192C19.4406 5.33192 19.6694 5.06274 19.6694 4.73069C19.6694 4.39864 19.4406 4.12946 19.1583 4.12946L1.99122 4.12946L4.37153 1.32959C4.57114 1.0948 4.57114 0.714117 4.37153 0.47932C4.17191 0.244523 3.84828 0.244523 3.64866 0.47932L0.395784 4.30556Z'
        fill={isActive ? '#342F55' : '#232D22'}
      />
    </svg>
  ) : (
    <svg
      width='20'
      height='10'
      viewBox='0 0 20 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.5022 5.15636C19.7018 4.92157 19.7018 4.54088 19.5022 4.30609L16.2493 0.479854C16.0497 0.245057 15.726 0.245056 15.5264 0.479854C15.3268 0.71465 15.3268 1.09533 15.5264 1.33013L17.9067 4.12999L0.739657 4.12999C0.457362 4.12999 0.228516 4.39917 0.228516 4.73122C0.228516 5.06328 0.457362 5.33246 0.739657 5.33246L17.9067 5.33246L15.5264 8.13232C15.3268 8.36712 15.3268 8.7478 15.5264 8.9826C15.726 9.21739 16.0497 9.21739 16.2493 8.9826L19.5022 5.15636Z'
        fill={isActive ? '#342F55' : '#232D22'}
        fill-opacity='0.8'
      />
    </svg>
  );
};
