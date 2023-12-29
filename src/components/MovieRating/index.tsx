import { FC } from 'react';
import { Container } from './styles';

interface MovieRatingProps {
    rating: number;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating }) => {
    const maxRating = 5;
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= maxRating; i++) {
        const filled = i <= rating;
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill={filled ? '#FF859B' : 'none'}
            stroke="#FF859B"
            strokeWidth="1" // Valor ajustado para tornar as linhas mais finas
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g clipPath="url(#clip0_305_405)">
              <path d="M9.23443 12.0729C9.1555 12.0732 9.07848 12.0486 9.01435 12.0026L6.00005 9.81724L2.98576 12.0026C2.92136 12.0493 2.84377 12.0743 2.76422 12.074C2.68467 12.0737 2.60727 12.0481 2.54321 12.0009C2.47915 11.9538 2.43176 11.8874 2.40788 11.8116C2.384 11.7357 2.38487 11.6542 2.41036 11.5788L3.58599 8.0967L0.539115 6.00724C0.473117 5.96203 0.423306 5.89691 0.39696 5.82137C0.370613 5.74584 0.369111 5.66386 0.392674 5.58741C0.416236 5.51096 0.463628 5.44405 0.527926 5.39646C0.592223 5.34886 0.670056 5.32308 0.750052 5.32287H4.50896L5.64333 1.83185C5.66777 1.75648 5.71545 1.69079 5.77954 1.6442C5.84362 1.59761 5.92082 1.57251 6.00005 1.57251C6.07928 1.57251 6.15648 1.59761 6.22057 1.6442C6.28465 1.69079 6.33233 1.75648 6.35677 1.83185L7.49115 5.32404H11.2501C11.3301 5.324 11.4082 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4622 6.00841L8.41411 8.0967L9.58904 11.5779C9.60807 11.6342 9.61343 11.6943 9.60466 11.7531C9.59589 11.812 9.57325 11.8679 9.5386 11.9163C9.50396 11.9646 9.45831 12.004 9.40542 12.0313C9.35253 12.0585 9.29392 12.0728 9.23443 12.0729Z" />
            </g>
            <defs>
              <clipPath id="clip0_305_405">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)" />
              </clipPath>
            </defs>
          </svg>
        );
      }
      return stars;
    };
  
    return <Container>{renderStars()}</Container>;
  };