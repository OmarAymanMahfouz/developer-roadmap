import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { RemoveScroll } from 'react-remove-scroll';
import { RoadmapType } from '../../lib/roadmap';
import RoadmapGroup from '../../pages/[roadmap]/[group]';
import { CheckIcon, CloseIcon, RepeatIcon, QuestionIcon, InfoIcon, MoonIcon } from '@chakra-ui/icons';
import { queryGroupElementsById } from '../../lib/renderer/utils';


type ContentDrawerProps = {
  roadmap: RoadmapType;
  groupId: string;
  onClose?: () => void;
};

export function ContentDrawer(props: ContentDrawerProps) {
  const { roadmap, groupId, onClose = () => null } = props;
  if (!groupId) {
    return null;
  }

  const expert = localStorage.getItem(groupId) === 'done';
  const deepKnowledge = localStorage.getItem(groupId) === 'needPractice';
  const shallowKnowledge = localStorage.getItem(groupId) === 'needRevision';
  const NoKnowledge = localStorage.getItem(groupId) === 'study';

  return (
    <Box zIndex={99999} pos="relative">
      <Box
        onClick={onClose}
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black"
        opacity={0.4}
      />
      <RemoveScroll allowPinchZoom>
        <Box
          p="0px 30px 30px"
          position="fixed"
          w={['100%', '60%', '40%']}
          bg="white"
          top={0}
          right={0}
          bottom={0}
          borderLeftWidth={'1px'}
          overflowY="scroll"
        >
          <Flex
            mt="20px"
            justifyContent="space-between"
            alignItems="center"
            zIndex={1}
          >
{/* Expert button*/}
            {!expert && (
              <Button
                onClick={() => {
                  localStorage.setItem(groupId, 'done');
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.add('done')
                  );
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('needPractice', 'needRevision', 'study')
                  );
                  onClose();
                }}
                colorScheme="blue"
                leftIcon={<CheckIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Expert
                </Text>
              </Button>
            )}
            {expert && (
              <Button
                onClick={() => {
                  localStorage.removeItem(groupId);
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('done')
                  );
                  onClose();
                }}
                colorScheme="purple"
                leftIcon={<RepeatIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Mark as Pending
                </Text>
              </Button>
            )}
{/* Expert button end*/}

{/* Close button */}

            <Button
              onClick={onClose}
              colorScheme="yellow"
              ml="5px"
              leftIcon={<CloseIcon width="8px" />}
              iconSpacing={0}
              size="xs"
            >
              <Text as="span" d={['none', 'none', 'none', 'block']} ml="10px">
                Close
              </Text>
            </Button>
          </Flex>
{/* Close button end */}

          <Box
            mt="2px"
          >
{/* pupil button */}
            {!deepKnowledge && (
              <Button
                onClick={() => {
                  localStorage.setItem(groupId, 'needPractice');
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.add('needPractice')
                  );
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('done', 'needRevision', 'study')
                  );
                  onClose();
                }}
                colorScheme="green"
                leftIcon={<MoonIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Deep Knowledge
                </Text>
              </Button>
            )}
            {deepKnowledge && (
              <Button
                onClick={() => {
                  localStorage.removeItem(groupId);
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('needPractice')
                  );
                  onClose();
                }}
                colorScheme="purple"
                leftIcon={<RepeatIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Mark as Pending
                </Text>
              </Button>
            )}
{/* pupil end */}
          </Box>
          <Box
            mt="2px"
          >
{/* Newbie button */}
            {!shallowKnowledge && (
              <Button
                onClick={() => {
                  localStorage.setItem(groupId, 'needRevision');
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.add('needRevision')
                  );
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('done', 'needPractice', 'study')
                  );
                  onClose();
                }}
                colorScheme="gray"
                leftIcon={<InfoIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Shallow Knowledge
                </Text>
              </Button>
            )}
            {shallowKnowledge && (
              <Button
                onClick={() => {
                  localStorage.removeItem(groupId);
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('needRevision')
                  );
                  onClose();
                }}
                colorScheme="purple"
                leftIcon={<RepeatIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Mark as Pending
                </Text>
              </Button>
            )}
{/* Newbie button end */}
          </Box>
          <Box
            mt="2px"
          >
{/* Unknown button */}
            {!NoKnowledge && (
              <Button
                onClick={() => {
                  localStorage.setItem(groupId, 'study');
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.add('study')
                  );
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('done', 'needPractice', 'needRevision')
                  );
                  onClose();
                }}
                colorScheme="red"
                leftIcon={<QuestionIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  No Knowledge
                </Text>
              </Button>
            )}
            {NoKnowledge && (
              <Button
                onClick={() => {
                  localStorage.removeItem(groupId);
                  queryGroupElementsById(groupId).forEach((item) =>
                    item?.classList?.remove('study')
                  );
                  onClose();
                }}
                colorScheme="purple"
                leftIcon={<RepeatIcon />}
                size="xs"
                iconSpacing={0}
              >
                <Text
                  as="span"
                  d={['block', 'none', 'none', 'block']}
                  ml="10px"
                >
                  Mark as Pending
                </Text>
              </Button>
            )}
          </Box>
{/* Unknown button end */}
          <RoadmapGroup isOutlet roadmap={roadmap} group={groupId} />
        </Box>
      </RemoveScroll>
    </Box>
  );
}
