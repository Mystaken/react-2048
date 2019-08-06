import React, { FunctionComponent, useEffect, useState } from 'react';
import anime from 'animejs';
import object from '@2048/utils/object';
import styled from 'styled-components';

export interface AnimeProps extends Omit<anime.AnimeParams, 'target'> {
  continue?: boolean;
  restart?: boolean;
}
const AnimeDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const Anime: FunctionComponent<AnimeProps> = ({
  children,
  restart,
  continue: cont,
  ...props
}) => {
  const [targets, setTargets] = useState<any>(null);
  let [animeInstance, setAnimeInstance] = useState<anime.AnimeInstance | null>(
    null
  );
  let [animeProps, setAnimeProps] = useState<AnimeProps | null>(null);
  useEffect(() => {
    if (restart) {
      setTimeout(() => {
        if (animeInstance && animeInstance.began) {
          animeInstance.pause();
          (animeInstance as any).reset();
        }
      }, 0);
      return;
    }
    if (targets && (animeProps === null || !object.eq(animeProps, props))) {
      setAnimeProps(props);
      if (animeInstance !== null) {
        animeInstance.pause();
        if (!cont) animeInstance.restart();
      }
      setAnimeInstance(anime(Object.assign({}, { targets }, { ...props })));
    }
  }, [props]);

  function addTarget(newTarget: any) {
    if (newTarget) {
      setTargets(newTarget);
    }
  }
  return <AnimeDiv ref={addTarget}>{children}</AnimeDiv>;
};

export default Anime;
