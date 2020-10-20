import React from 'react';
import grey from '@material-ui/core/colors/grey';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const Timeline = () => {
  return (
    <div>
      <Link href="mailto:victorialee72@live.com"><EmailIcon style={{ color: grey[800] }} /></Link>
        <Link href="https://www.linkedin.com/in/victoriamlee1/" target="_blank" rel="noopener"><LinkedInIcon style={{ color: grey[800] }} /></Link>
        <Link href="https://github.com/victoriamlee" target="_blank" rel="noopener"><GitHubIcon style={{ color: grey[800] }} /></Link>
    </div>
  );
}

export default Timeline;