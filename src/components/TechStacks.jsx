import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechStacks() {
    // useState skill to display names of hovered icons
    const [skill, setSkill] = useState('');
    // Array of icons to display each skill
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
                color: 'var(--seasalt)',
                minHeight: '50px',
                display: 'flex',
                justifyContent: 'center',
                fontSize: "20px",
                fontWeight: 'bold'
            }
      }

    return (
        <Box >
            <Text style={skillHolder.textBox}>{skill}</Text>
            <Box >
                <motion.div display='flex' flexDirection='row' initial={'hidden'} animate='visible' variants={containerVariants}>
                    <Box display='flex' justifyContent='space-evenly'>
                      {/* Map through icon list to display all icons and use skill state to display skill name above  */}
                    {icons.map((icon) => (
                        <motion.img key={icon.iconTitle} src={icon.imageSrc} variants={listVariants} alt={icon.iconDescription}
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