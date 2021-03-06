
const React = require('react');
const {
  StyleSheet,
  Text,
  View,
  Image
} = require('react-native');
const {
  Container, Header, Content, DatePicker,Button,Left,Right,Icon,Body
} = require('native-base');
const {
  Actions
} = require('react-native-router-flux');
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD');

export default class date extends React.Component {
  constructor(props) {
        super(props);
 
    this.state = {
      selectedStartDate: null,
      id:this.props.id,
      description:this.props.description
    };
 
        this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({ selectedStartDate: date });
  }
 
  render() {
    const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const startDate = selectedStartDate ? moment(selectedStartDate).format('jYYYY-jM-jD').toString() : '';
        const startDatem = selectedStartDate ? moment(selectedStartDate).format('YYYY-M-D').toString() : '';
    return (
      <Container style={styles.container}>
   <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
   <Left style={{marginRight:10,marginLeft:5}}>
                        <Icon  name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500,fontSize:35,}}/>
                    </Left> 
                    <Left style={{marginRight:30,marginLeft:-60}}>
                    <Image  source={require('./../assets/image/pelatos.png')}  style={styles.backgroundImage}/>
                    </Left> 
                    {/* <Right style={{marginLeft:10}}>
                  <Text style={{color:'white',fontSize:14}}> پنل کاربری پلاتو</Text>
                    </Right>  */}
                       <Body style={{marginRight:0,marginLeft:-10}}><Text style={{color:'white',fontSize:22}}> پنل کاربری پلاتو</Text></Body>
                    <Left style={{marginLeft:5,marginRight:-20}}>
                          <View  style={{ backgroundColor : '#607D8B',width:40,height:40,borderRadius:20,marginTop:3,alignItems:'center'}}>
                   <Icon  name='person'   style={{marginTop:5,color:'#00BCD4'}}/>
                       </View>
                    </Left> 
      </Header>
<Content>
        <PersianCalendarPicker
          textStyle={{color:'white'}}
          onDateChange={this.onDateChange}
                />
  <View  style={{flexDirection:'row'}}>
 <Text style={{color:'white',marginLeft:20}}>تاریخ انتخاب شده :</Text>
 <Text style={{color:'white'}}>{ startDate }</Text>
 {/* <Text>{this.state.id}</Text> */}
            {/* <Text>{startDate}</Text> */}
            <Text>{startDatem}</Text>
 </View>
        <View>
          
        {/* <Button><Text>next</Text></Button> */}
          <Button style={styles.see}  onPress={()=>Actions.rooms({id:this.state.id,description:this.state.description,date:startDate,datem:startDatem})}>
          <Text style={{color:'white',marginLeft:50,marginRight:50}}>لطفا بعد از انتخاب تاریخ کلیک کنید</Text>
           </Button>
          
        </View>
        </Content>
      
      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {

    // flex: 1,
    backgroundColor: '#2d3436',
    marginTop: 0,
    borderWidth:1,
    
    
  },
  see:{
    width:300,
    height:30,
    marginTop: 5,
    backgroundColor:'green',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:1.3,
    borderColor:'white',
    marginLeft:30,
    marginRight:30,
    marginTop:10
   
  }
});





/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict-local
 * @format
 */

// "use strict";
// var _slicedToArray = (function() {
//   function sliceIterator(arr, i) {
//     var _arr = [];
//     var _n = true;
//     var _d = false;
//     var _e = undefined;
//     try {
//       for (
//         var _i = arr[Symbol.iterator](), _s;
//         !(_n = (_s = _i.next()).done);
//         _n = true
//       ) {
//         _arr.push(_s.value);
//         if (i && _arr.length === i) break;
//       }
//     } catch (err) {
//       _d = true;
//       _e = err;
//     } finally {
//       try {
//         if (!_n && _i["return"]) _i["return"]();
//       } finally {
//         if (_d) throw _e;
//       }
//     }
//     return _arr;
//   }
//   return function(arr, i) {
//     if (Array.isArray(arr)) {
//       return arr;
//     } else if (Symbol.iterator in Object(arr)) {
//       return sliceIterator(arr, i);
//     } else {
//       throw new TypeError(
//         "Invalid attempt to destructure non-iterable instance"
//       );
//     }
//   };
// })();
// var _extends =
//   Object.assign ||
//   function(target) {
//     for (var i = 1; i < arguments.length; i++) {
//       var source = arguments[i];
//       for (var key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//           target[key] = source[key];
//         }
//       }
//     }
//     return target;
//   };

// /**
//  * Dependency Traversal logic for the Delta Bundler. This method calculates
//  * the modules that should be included in the bundle by traversing the
//  * dependency graph.
//  * Instead of traversing the whole graph each time, it just calculates the
//  * difference between runs by only traversing the added/removed dependencies.
//  * To do so, it uses the passed passed graph dependencies and it mutates it.
//  * The paths parameter contains the absolute paths of the root files that the
//  * method should traverse. Normally, these paths should be the modified files
//  * since the last traversal.
//  */ let traverseDependencies = (() => {
//   var _ref2 = _asyncToGenerator(function*(paths, graph, options) {
//     const delta = {
//       added: new Set(),
//       modified: new Set(),
//       deleted: new Set(),
//       inverseDependencies: new Map()
//     };

//     const internalOptions = getInternalOptions(options);

//     for (const path of paths) {
//       // Only process the path if it's part of the dependency graph. It's possible
//       // that this method receives a path that is no longer part of it (e.g if a
//       // module gets removed from the dependency graph and just afterwards it gets
//       // modified), and we have to ignore these cases.
//       if (graph.dependencies.get(path)) {
//         delta.modified.add(path);

//         yield traverseDependenciesForSingleFile(
//           path,
//           graph,
//           delta,
//           internalOptions
//         );
//       }
//     }

//     const added = new Map();
//     const deleted = new Set();

//     for (const path of delta.deleted) {
//       // If a dependency has been marked both as added and deleted, it means that
//       // this is a renamed file (or that dependency has been removed from one path
//       // but added back in a different path). In this case the addition and
//       // deletion "get cancelled".
//       if (!delta.added.has(path)) {
//         deleted.add(path);
//       }

//       delta.modified.delete(path);
//       delta.added.delete(path);
//     }

//     for (const path of delta.added) {
//       added.set(path, nullthrows(graph.dependencies.get(path)));
//     }

//     for (const path of delta.modified) {
//       added.set(path, nullthrows(graph.dependencies.get(path)));
//     }

//     return {
//       added,
//       deleted
//     };
//   });
//   return function traverseDependencies(_x, _x2, _x3) {
//     return _ref2.apply(this, arguments);
//   };
// })();
// let initialTraverseDependencies = (() => {
//   var _ref3 = _asyncToGenerator(function*(graph, options) {
//     const delta = {
//       added: new Set(),
//       modified: new Set(),
//       deleted: new Set(),
//       inverseDependencies: new Map()
//     };

//     const internalOptions = getInternalOptions(options);

//     yield Promise.all(
//       graph.entryPoints.map(function(path) {
//         return traverseDependenciesForSingleFile(
//           path,
//           graph,
//           delta,
//           internalOptions
//         );
//       })
//     );

//     reorderGraph(graph);

//     return {
//       added: graph.dependencies,
//       deleted: new Set()
//     };
//   });
//   return function initialTraverseDependencies(_x4, _x5) {
//     return _ref3.apply(this, arguments);
//   };
// })();
// let traverseDependenciesForSingleFile = (() => {
//   var _ref4 = _asyncToGenerator(function*(path, graph, delta, options) {
//     options.onDependencyAdd();

//     yield processModule(path, graph, delta, options);

//     options.onDependencyAdded();
//   });
//   return function traverseDependenciesForSingleFile(_x6, _x7, _x8, _x9) {
//     return _ref4.apply(this, arguments);
//   };
// })();
// let processModule = (() => {
//   var _ref5 = _asyncToGenerator(function*(path, graph, delta, options) {
//     // Transform the file via the given option.
//     const result = yield options.transform(path);

//     // Get the absolute path of all sub-dependencies (some of them could have been
//     // moved but maintain the same relative path).
//     const currentDependencies = resolveDependencies(
//       path,
//       result.dependencies,
//       options
//     );

//     const previousModule = graph.dependencies.get(path) || {
//       inverseDependencies: delta.inverseDependencies.get(path) || new Set(),
//       path
//     };

//     const previousDependencies = previousModule.dependencies || new Map();

//     // Update the module information.
//     const module = _extends({}, previousModule, {
//       dependencies: new Map(),
//       getSource: result.getSource,
//       output: result.output
//     });

//     graph.dependencies.set(module.path, module);

//     for (const _ref6 of currentDependencies) {
//       var _ref7 = _slicedToArray(_ref6, 2);
//       const relativePath = _ref7[0];
//       const dependency = _ref7[1];
//       module.dependencies.set(relativePath, dependency);
//     }

//     for (const _ref8 of previousDependencies) {
//       var _ref9 = _slicedToArray(_ref8, 2);
//       const relativePath = _ref9[0];
//       const dependency = _ref9[1];
//       if (!currentDependencies.has(relativePath)) {
//         removeDependency(module, dependency.absolutePath, graph, delta);
//       }
//     }

//     // Check all the module dependencies and start traversing the tree from each
//     // added and removed dependency, to get all the modules that have to be added
//     // and removed from the dependency graph.
//     const promises = [];

//     for (const _ref10 of currentDependencies) {
//       var _ref11 = _slicedToArray(_ref10, 2);
//       const relativePath = _ref11[0];
//       const dependency = _ref11[1];
//       if (!previousDependencies.has(relativePath)) {
//         promises.push(
//           addDependency(module, dependency.absolutePath, graph, delta, options)
//         );
//       }
//     }

//     yield Promise.all(promises);

//     return module;
//   });
//   return function processModule(_x10, _x11, _x12, _x13) {
//     return _ref5.apply(this, arguments);
//   };
// })();
// let addDependency = (() => {
//   var _ref12 = _asyncToGenerator(function*(
//     parentModule,
//     path,
//     graph,
//     delta,
//     options
//   ) {
//     // The new dependency was already in the graph, we don't need to do anything.
//     const existingModule = graph.dependencies.get(path);

//     if (existingModule) {
//       existingModule.inverseDependencies.add(parentModule.path);

//       return;
//     }

//     // This module is being transformed at the moment in parallel, so we should
//     // only mark its parent as an inverse dependency.
//     const inverse = delta.inverseDependencies.get(path);
//     if (inverse) {
//       inverse.add(parentModule.path);

//       return;
//     }

//     delta.added.add(path);
//     delta.inverseDependencies.set(path, new Set([parentModule.path]));

//     options.onDependencyAdd();

//     const module = yield processModule(path, graph, delta, options);

//     graph.dependencies.set(module.path, module);
//     module.inverseDependencies.add(parentModule.path);

//     options.onDependencyAdded();
//   });
//   return function addDependency(_x14, _x15, _x16, _x17, _x18) {
//     return _ref12.apply(this, arguments);
//   };
// })();
// function _asyncToGenerator(fn) {
//   return function() {
//     var gen = fn.apply(this, arguments);
//     return new Promise(function(resolve, reject) {
//       function step(key, arg) {
//         try {
//           var info = gen[key](arg);
//           var value = info.value;
//         } catch (error) {
//           reject(error);
//           return;
//         }
//         if (info.done) {
//           resolve(value);
//         } else {
//           return Promise.resolve(value).then(
//             function(value) {
//               step("next", value);
//             },
//             function(err) {
//               step("throw", err);
//             }
//           );
//         }
//       }
//       return step("next");
//     });
//   };
// }
// const nullthrows = require("nullthrows");
// /**
//  * Internal data structure that the traversal logic uses to know which of the
//  * files have been modified. This allows to return the added modules before the
//  * modified ones (which is useful for things like Hot Module Reloading).
//  **/ function getInternalOptions(_ref) {
//   let transform = _ref.transform,
//     resolve = _ref.resolve,
//     onProgress = _ref.onProgress;
//   let numProcessed = 0;
//   let total = 0;
//   return {
//     transform,
//     resolve,
//     onDependencyAdd: () => onProgress && onProgress(numProcessed, ++total),
//     onDependencyAdded: () => onProgress && onProgress(++numProcessed, total)
//   };
// }
// function removeDependency(parentModule, absolutePath, graph, delta) {
//   const module = graph.dependencies.get(absolutePath);

//   if (!module) {
//     return;
//   }

//   module.inverseDependencies.delete(parentModule.path);

//   // This module is still used by another modules, so we cannot remove it from
//   // the bundle.
//   if (module.inverseDependencies.size) {
//     return;
//   }

//   delta.deleted.add(module.path);

//   // Now we need to iterate through the module dependencies in order to
//   // clean up everything (we cannot read the module because it may have
//   // been deleted).
//   for (const dependency of module.dependencies.values()) {
//     removeDependency(module, dependency.absolutePath, graph, delta);
//   }

//   // This module is not used anywhere else!! we can clear it from the bundle
//   graph.dependencies.delete(module.path);
// }

// function resolveDependencies(parentPath, dependencies, options) {
//   return new Map(
//     dependencies.map(result => {
//       const relativePath = result.name;

//       const dependency = {
//         absolutePath: options.resolve(parentPath, result.name),
//         data: result
//       };

//       return [relativePath, dependency];
//     })
//   );
// }

// /**
//  * Re-traverse the dependency graph in DFS order to reorder the modules and
//  * guarantee the same order between runs. This method mutates the passed graph.
//  */
// function reorderGraph(graph) {
//   const orderedDependencies = new Map();

//   graph.entryPoints.forEach(entryPoint => {
//     const mainModule = graph.dependencies.get(entryPoint);

//     if (!mainModule) {
//       throw new ReferenceError("Module not registered in graph: " + entryPoint);
//     }

//     reorderDependencies(graph, mainModule, orderedDependencies);
//   });

//   graph.dependencies = orderedDependencies;
// }

// function reorderDependencies(graph, module, orderedDependencies) {
//   if (module.path) {
//     if (orderedDependencies.has(module.path)) {
//       return;
//     }

//     orderedDependencies.set(module.path, module);
//   }

//   module.dependencies.forEach(dependency => {
//     const path = dependency.absolutePath;
//     const childModule = graph.dependencies.get(path);

//     if (!childModule) {
//       throw new ReferenceError("Module not registered in graph: " + path);
//     }

//     reorderDependencies(graph, childModule, orderedDependencies);
//   });
// }

// module.exports = {
//   initialTraverseDependencies,
//   traverseDependencies,
//   reorderGraph
// };
