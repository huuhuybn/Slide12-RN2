import { Image, ImageComponent, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import { ReactNode } from 'react'

interface HeaderProps {
  title?: string,
  iconLeft?: string,
  iconRight?: ImageSourcePropType,
  onPressRight?: () => void,
  onPressLeft?: () => void,
  leftComponent?: ReactNode,
  centerComponent?: ReactNode,
  rightComponent?: ReactNode,
  bgColor?: string,
  iconLeftColor?: string,
  iconRightColor?: string,
  leftIconSize?: number,
  rightIconSize?: number,
  numberOfLine?: number,
}
const CustomHeader = (props: HeaderProps): React.JSX.Element => {
  const { leftComponent, iconLeft, iconLeftColor, leftIconSize, onPressLeft } = props;
  const headerStyle : {} = [
    leftComponent && {leftComponent},
    iconLeft && {iconLeft},
    iconLeftColor && {iconLeftColor},
    leftIconSize && {leftIconSize},
    onPressLeft && {onPressLeft}
  ]
  const renderLeft = (): React.JSX.Element => {
    return ( leftComponent ||
      <View>
        {iconLeft ? (
          <Pressable hitSlop={15} onPress={onPressLeft}>
            <Image
              style={{tintColor: iconLeftColor, width: 100, height: 100}}
              source={{
                uri: iconLeft,
              }}
            />
          </Pressable>
        ) : (
          <View style={{ width: leftIconSize, height: leftIconSize }} />
        )}
      </View>
    )
  }
  return (
    <View style={{
      height: 50
    }}>
      {renderLeft()}
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({})
