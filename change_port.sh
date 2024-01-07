if [ -z "$1" ]
then
      echo "Port is empty, please specifiy port as argument"
else
    export RCT_METRO_PORT=$1
    sed -i '' "s/8081/$1/g" ios/*.xcodeproj/project.pbxproj
    sed -i '' "s/8081/$1/g" node_modules/react-native/React/Base/RCTDefines.h 
fi

