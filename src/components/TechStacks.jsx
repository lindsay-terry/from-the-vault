import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechStacks() {
    const [skill, setSkill] = useState('');

    const icons = [
        {
            iconTitle: 'JavaScript',
            imageSrc: './images/js.svg',
            iconDescription: 'JavaScript icon',
        },
        {
            iconTitle: 'React',
            imageSrc: './images/rn.svg',
            iconDescription: 'React icon',
        },
        {
            iconTitle: 'Node.JS',
            imageSrc: './images/node.svg',
            iconDescription: 'Node.js icon',
        },
        {
            iconTitle: 'MongoDB',
            imageSrc: './images/mongodb.svg',
            iconDescription: 'MongoDB icon',
        },
        {
            iconTitle: 'PostgreSQL',
            imageSrc: './images/psql.svg',
            iconDescription: 'PostgreSQL icon',
        },
        {
            iconTitle: 'Git',
            imageSrc: './images/git.svg',
            iconDescription: 'Git icon',
        },
    ];

    // Animation variants for skills list
    const listVariants = {
        hidden: {
          opacity: 0,
          x: 20,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4, // Take a total of 0.4 seconds for transition
          },
        },
      };
      
      const containerVariants = {
        visible: {
          transition: {
            staggerChildren: 0.2, // Stagger each icon by 0.2 seconds
          },
        },
      };

      const skillHolder = {
            textBox: {
                color: 'var(--honeydew)',
                minHeight: '50px',
                display: 'flex',
                justifyContent: 'center'
            }
      }

    return (
        <Box >
            <Text style={skillHolder.textBox}>{skill}</Text>
            <Box >
                <motion.div display='flex' flexDirection='row' initial={'hidden'} animate='visible' variants={containerVariants}>
                    <Box display='flex' justifyContent='space-evenly'>
                    {icons.map((icon) => (
                            <motion.img key={icon.iconTitle} src={icon.imageSrc} variants={listVariants}
                                        whileHover={{ scale: 1.5 }}
                                        onMouseEnter={() => setSkill(icon.iconTitle)}
                                        onMouseLeave={() => setSkill('')}/>
                    ))}
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};