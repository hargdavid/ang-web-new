import { NavigationDto, NavigationItem } from '../../types/content/navigation';

export const mapNavigation = (
  navigationsDto: NavigationDto[]
): NavigationItem[] =>
  navigationsDto.map((navigationDto) => ({
    name: navigationDto.title,
    path: navigationDto.link,
    isButton: navigationDto.isButton,
  }));
