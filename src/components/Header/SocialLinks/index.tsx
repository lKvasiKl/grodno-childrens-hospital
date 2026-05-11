import { Button, Flex } from 'antd';

import { SOCIAL_LINKS_ITEMS } from './socialLinks.model';

const SocialLinks = () => {
  return (
    <Flex gap="middle">
      {SOCIAL_LINKS_ITEMS.map(({ href, Icon, key }) => (
        <Button
          key={key}
          type="link"
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          icon={<Icon />}
        />
      ))}
    </Flex>
  );
};

export default SocialLinks;
