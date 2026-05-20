import { Button, Flex } from 'antd';
import type { ComponentProps } from 'react';

import { SOCIAL_LINKS_ITEMS } from './socialLinks.model';

type SocialLinksProps = ComponentProps<typeof Flex>;

const SocialLinks = (props: SocialLinksProps) => {
  return (
    <Flex gap="middle" {...props}>
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
