import React from 'react';
import Section from './Section';

function ContestAchievements() {
  const achievements = [
    {
      place: '2nd',
      contest: 'ICPC 2023 Asia Dhaka Preliminary Contest',
      date: 'May, 2023',
    },
    {
      place: '7th',
      contest: 'ICPC 2022 Asia Dhaka Regional Contest',
      date: 'Oct, 2022',
    },
    {
      place: '7th',
      contest: 'ICPC 2021 Asia Dhaka Regional Contest',
      date: 'Nov, 2021',
    },
    {
      place: '310th',
      contest: 'Google Kick Start Round F',
      link: 'https://zibada.guru/gcj/ks2022f/',
      date: '2022',
    },
    {
      place: '477th',
      contest: 'Google Kick Start Round A',
      link: 'https://zibada.guru/gcj/ks2021a/',
      date: '2021',
    },
  ];

  return (
    <Section title="Contest Achievements">
      <ul className="achievements-list-line">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <strong>{achievement.place}</strong> - {achievement.date}{' '}
            {achievement.link ? (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                {achievement.contest}
              </a>
            ) : (
              achievement.contest
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ContestAchievements;
