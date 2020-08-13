import React from 'react';

const ImageCard = ({ image, clickTag }) => {
  const tags = image.tags.split(', ');
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-md hover:shadow-2xl transition duration-500 cursor-pointer'>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by{' '}
          <a
            href={`https://pixabay.com/ru/users/${image.user}-${image.user_id}/`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-purple-700'
          >
            {image.user}
          </a>
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <span
            onClick={() => clickTag(tag)}
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 transition duration-700 hover:text-gray-900 hover:bg-gray-400'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
