import React from 'react';

// Components
import Option from './Option';

const Options = () => {
  const options = [
    {
      title: 'Full Name',
      key: 'full_name',
    },
    {
      title: 'Description',
      key: 'description',
    },
    {
      title: 'Experience',
      key: 'experiences',
    },
    {
      title: 'Education',
      key: 'educations',
    },
    {
      title: 'Skills',
      key: 'skills',
    },
    {
      title: 'Highskills',
      key: 'highskills',
    },
    {
      title: 'Interests',
      key: 'interests',
    },
  ];

  return (
    <div>
      {options.map((option) => (
        <Option title={option.title} key={option.key} stateKey={option.key} />
      ))}
    </div>
  );
};

export default Options;
