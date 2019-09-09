define({ "api": [
  {
    "type": "get",
    "url": "/dimmers/<node_id>/get_level",
    "title": "get_dimmer_level",
    "name": "get_dimmer_level",
    "group": "Actuators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Dimmer's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dimmer",
            "description": "<p>Dimmer's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>dimmer level</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"dimmer\": 4,\n  \"type\": \"Level\",\n  \"updateTime\": 1454682996,\n  \"value\": 50\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets level of a given dimmer in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a dimmer:",
          "content": "{\n  \"error\": \"Node is not a dimmer\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Actuators"
  },
  {
    "type": "get",
    "url": "/dimmers/get_dimmers_list",
    "title": "get_dimmers_list",
    "name": "get_dimmers_list",
    "group": "Actuators",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "JSON",
            "description": "<p>List of all dimmer nodes in the network i a JSON format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"4\": \"ZE27\",\n  \"6\": \"ZE27\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Lists IDs and product names of all dimmer nodes in the network. The controller is excluded.</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Actuators"
  },
  {
    "type": "post",
    "url": "/dimmers/set_level",
    "title": "set_dimmer_level",
    "name": "set_dimmer_level",
    "group": "Actuators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Dimmer's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>level value ( 0&lt;value&lt;99 )</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Exemple :",
          "content": "{\n    'node_id' : '4',\n    'value' : '50'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "command",
            "description": "<p>dimmer's new level</p>"
          }
        ]
      }
    },
    "description": "<p>Sends command to dimmer node</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a dimmer:",
          "content": "{\n  \"error\": \"Node is not a dimmer\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Actuators"
  },
  {
    "type": "get",
    "url": "/network/reset",
    "title": "reset_network",
    "name": "Reset_Network",
    "group": "Network",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Confirmation that the Z-Wave Network has been reset</p>"
          }
        ]
      }
    },
    "description": "<p>Resets the network's controller. Do not call this method before excluding (removing) the sensors connected to the controller.</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "get",
    "url": "/network/info",
    "title": "get_network_info",
    "name": "get_network_info",
    "group": "Network",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Network_Home_ID",
            "description": "<p>Network's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Node_",
            "description": "<p><Number> A JSON containing node's information (for each node). See below</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "Is_Ready",
            "description": "<p>Node status</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Neighbours",
            "description": "<p>List of the node's neighbours IDs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Node_ID",
            "description": "<p>Node's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Node_location",
            "description": "<p>Node's location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Node_name",
            "description": "<p>Node's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Product_name",
            "description": "<p>Node's product name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Query_stage",
            "description": "<p>Node object's readiness stage. Once it's at &quot;Complete&quot; stage, the Node object is ready to be used.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Query_stage_",
            "description": "<p>(%)  Node object's readiness stage (pourcentage). Once it's at 100%, the Node object is ready to be used.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n\"Network Home ID\": \"0xe221b13f\",\n\"Node 1\": {\n    \"Is Ready\": true,\n    \"Neighbours\": [\"2\",\"3\"],\n    \"Node ID\": \"1\",\n    \"Node location\": \"\",\n    \"Node name\": \"\",\n    \"Product name\": \"Z-Stick Gen5\",\n    \"Query Stage\": \"Complete\",\n    \"Query Stage (%)\": \"100 %\"\n  },\n\"Node 2\": {\n    \"Is Ready\": true,\n    \"Neighbours\": [\"1\",\"3\"],\n    \"Node ID\": \"2\",\n    \"Node location\": \"\",\n    \"Node name\": \"\",\n    \"Product name\": \"MultiSensor 6\",\n    \"Query Stage\": \"Complete\",\n    \"Query Stage (%)\": \"100 %\"\n  },\n\"Node 3\": {\n    \"Is Ready\": true,\n    \"Neighbours\": [\"1\",\"2\"],\n    \"Node ID\": \"3\",\n    \"Node location\": \"\",\n    \"Node name\": \"\",\n    \"Product name\": \"ZE27\",\n    \"Query Stage\": \"Complete\",\n    \"Query Stage (%)\": \"100 %\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets information about the Z-Wave network in a JSON format</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "get",
    "url": "/network/get_nodes_configuration",
    "title": "get_nodes_configuration",
    "name": "get_nodes_configuration",
    "group": "Network",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Network_Home_ID",
            "description": "<p>Network's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Node_",
            "description": "<p><Number> A JSON containing node's informations that are detailed above (for each node except the controller)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Enable_Motion_Sensor",
            "description": "<p>Motion sensor level</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group1_Interval",
            "description": "<p>Number of seconds between two Group1 measurements transmissions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group1_Reports",
            "description": "<p>A number specifying measurements sent in this group (set to 241 to send all measurements on this group)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group2_Interval",
            "description": "<p>Number of seconds between two Group2 measurements transmissions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group2_Reports",
            "description": "<p>A number specifying measurements sent in this group (set to 0 because no measurements will be sent on this group)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group3_Interval",
            "description": "<p>Number of seconds between two Group3 measurements transmissions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Group3_Reports",
            "description": "<p>A number specifying measurements sent in this group (set to 0 because no measurements will be sent on this group)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Node_ID",
            "description": "<p>Node's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Wake_up_Interval",
            "description": "<p>Number of seconds between two wake-ups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n\"Network Home ID\": \"0xe221b13f\",\n\"Node 2\": {\n    \"Enable Motion Sensor\": \"Enabled level 5 (maximum sensitivity)\",\n    \"Group 1 Interval\": \"3600\",\n    \"Group 1 Reports\": \"241\",\n    \"Group 2 Interval\": \"3600\",\n    \"Group 2 Reports\": \"0\",\n    \"Group 3 Interval\": \"3600\",\n    \"Group 3 Reports\": \"0\",\n    \"Node ID\": \"2\",\n    \"Wake-up Interval\": \"3600\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets the list of nodes and their configuration parameters in a JSON format. For each node, the system should provide the following information: Node ID, Motion sensor level, Wake_up_Interval and the report and interval of each group (there are three groups). See details in the documentation of the sensor: Aeon Labs MultiSensor 6 (Z-wave MultiSensor).</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "post",
    "url": "/network/set_sensor_nodes_basic_configuration",
    "title": "set_sensor_nodes_basic_configuration",
    "name": "set_sensor_nodes_basic_configuration",
    "group": "Network",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Group_Interval",
            "description": "<p>Number of seconds between two successive transfers of measures</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Group_Reports",
            "description": "<p>Number identifying measures sent by the sensor</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Wake-up_Interval",
            "description": "<p>Number of seconds between two node's wake-ups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Exemple :",
          "content": "{\n    'Group_Interval' : '224',\n    'Group_Reports' : '480',\n    'Wake-up_Interval' : '480'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Description of the new sensor nodes' configuration.</p>"
          }
        ]
      }
    },
    "description": "<p>Configure all sensor nodes of the network with a predefined configuration. This methods configures only Group 1. All measurements (temperature, luminosity, motion and humidity) must be retrieved from the sensors after a given period of time (Group_Interval Number).</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "get",
    "url": "/network/start",
    "title": "start_network",
    "name": "start_network",
    "group": "Network",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Confirmation that the Z-Wave Network Restarted</p>"
          }
        ]
      }
    },
    "description": "<p>Starts the openzwave software representation of the network</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "get",
    "url": "/network/stop",
    "title": "stop_netowrk",
    "name": "stop_netowrk",
    "group": "Network",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Confirmation that the Z-Wave Network has stopped</p>"
          }
        ]
      }
    },
    "description": "<p>Stops the openzwave software representation of the network</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Network"
  },
  {
    "type": "post",
    "url": "/nodes/add_node",
    "title": "add_node",
    "name": "add_node",
    "group": "Nodes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Node added successfully</p>"
          }
        ]
      }
    },
    "description": "<p>Adds Node to the network by getting the controller into inclusion mode for 20 seconds. It's the equivalent of the pressing of the controller's button.  The node can not be a controller.</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/<node_id>/get_battery",
    "title": "get_battery_level",
    "name": "get_battery_level",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>battery level (%)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"sensor\": 2,\n  \"type\": \"battery\",\n  \"updateTime\": 1454684168,\n  \"value\": 100\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets the battery level of a given sensor, in a JSON format</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/<node_id>/get_location",
    "title": "get_location",
    "name": "get_location",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location's value</p>"
          }
        ]
      }
    },
    "description": "<p>Gets location of a given node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/<node_id>/get_name",
    "title": "get_name",
    "name": "get_name",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name's value</p>"
          }
        ]
      }
    },
    "description": "<p>Gets name of a given node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/<node_id>/get_neighbours",
    "title": "get_neighbours",
    "name": "get_neighbours",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "neighbours",
            "description": "<p>list of a node's neighbours</p>"
          }
        ]
      }
    },
    "description": "<p>Gets list of a node's neighbours</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/get_nodes_list",
    "title": "get_nodes_list",
    "name": "get_nodes_list",
    "group": "Nodes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "JSON",
            "description": "<p>List of all nodes in the network in a JSON format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"1\": \"Z-Stick Gen5\",\n  \"2\": \"MultiSensor 6\",\n  \"3\": \"ZE27\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Lists IDs and product names of all nodes in the network</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/nodes/<node_id>/get_parameter/<parameter>",
    "title": "get_parameter",
    "name": "get_parameter",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parameter",
            "description": "<p>Parameter's unique index</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parameter",
            "description": "<p>parameter's value</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the value of a given parameter of a node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "post",
    "url": "/nodes/remove_node",
    "title": "remove_node",
    "name": "remove_node",
    "group": "Nodes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Node removed successfully</p>"
          }
        ]
      }
    },
    "description": "<p>Removes Node from the network by getting the controller into exclusion mode for 20 seconds. It's the equivalent of the persistent pressing of the controller's button.</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "post",
    "url": "/nodes/set_location",
    "title": "set_location",
    "name": "set_location",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>new location value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Exemple :",
          "content": "{\n    'node_id' : '4',\n    'value' : 'A401'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location's new value</p>"
          }
        ]
      }
    },
    "description": "<p>Sets location of a given node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "post",
    "url": "/nodes/set_name",
    "title": "set_name",
    "name": "set_name",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>new name value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Exemple :",
          "content": "{\n    'node_id' : '4',\n    'value' : 'A401-multisensor'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name's new value</p>"
          }
        ]
      }
    },
    "description": "<p>Sets name of a given node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "post",
    "url": "/nodes/set_parameter",
    "title": "set_parameter",
    "name": "set_parameter",
    "group": "Nodes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parameter_index",
            "description": "<p>Parameter's unique index  (See sensor manual)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>new value of the parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>size of value of the parameter (See sensor manual)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Exemple :",
          "content": "{\n    'node_id' : '4',\n    'parameter_index' : '101',\n    'value' : '227',\n    'size' : '4'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parameter",
            "description": "<p>parameter's new value</p>"
          }
        ]
      }
    },
    "description": "<p>Sets the value of a given parameter of a node</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Nodes"
  },
  {
    "type": "get",
    "url": "/sensors/<node_id>/get_all_measures",
    "title": "get_all_measures_sensor",
    "name": "get_all_measures_sensor",
    "group": "Sensors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "battery",
            "description": "<p>battery level (%)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "humidity",
            "description": "<p>humidity level (%)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "luminance",
            "description": "<p>luminance level (lux)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "temperature",
            "description": "<p>temperature level (C)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "motion",
            "description": "<p>motion state (true or false)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"battery\": 100,\n  \"controller\": \"Pi lab1\",\n  \"humidity\": 22,\n  \"location\": \"Room A401\",\n  \"luminance\": 60,\n  \"motion\": false,\n  \"sensor\": 2,\n  \"temperature\": 30.0,\n  \"updateTime\": 1454682568\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets all measures of a given sensor, in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a sensor:",
          "content": "{\n  \"error\": \"Node is not a sensor\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/sensors/<node_id>/get_humidity",
    "title": "get_humidity",
    "name": "get_humidity",
    "group": "Sensors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>humidity level (%)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"sensor\": 2,\n  \"type\": \"relative humidity\",\n  \"updateTime\": 1454682996,\n  \"value\": 21\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets humidity of a given sensor in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a sensor:",
          "content": "{\n  \"error\": \"Node is not a sensor\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/sensors/<node_id>/get_luminance",
    "title": "get_luminance",
    "name": "get_luminance",
    "group": "Sensors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>luminance level (lux)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"sensor\": 2,\n  \"type\": \"luminance\",\n  \"updateTime\": 1454682996,\n  \"value\": 49\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets humidity of a given sensor in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a sensor:",
          "content": "{\n  \"error\": \"Node is not a sensor\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/sensors/<node_id>/get_motion",
    "title": "get_motion",
    "name": "get_motion",
    "group": "Sensors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>motion state (boolean)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp at the measures' reception</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"sensor\": 2,\n  \"type\": \"sensor\",\n  \"updateTime\": 1454682996,\n  \"value\": true\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets motion of a given sensor in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a sensor:",
          "content": "{\n  \"error\": \"Node is not a sensor\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/sensors/get_sensors_list",
    "title": "get_sensors_list",
    "name": "get_sensors_list",
    "group": "Sensors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "JSON",
            "description": "<p>List of all sensor nodes in the network i a JSON format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"2\": \"MultiSensor 6\",\n  \"3\": \"MultiSensor 6\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Lists IDs and product names of all sensors nodes in the network. The controller is excluded.</p>",
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "type": "get",
    "url": "/sensors/<node_id>/get_temperature",
    "title": "get_temperature",
    "name": "get_temperature",
    "group": "Sensors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "node_id",
            "description": "<p>Sensor's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controller",
            "description": "<p>Controller name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the sensor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor",
            "description": "<p>Sensor's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of measurement</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Temperature level (C)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "updateTime",
            "description": "<p>Timestamp of the measure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of result in case of success:",
          "content": "{\n  \"controller\": \"Pi lab1\",\n  \"location\": \"Room A401\",\n  \"sensor\": 2,\n  \"type\": \"temperature\",\n  \"updateTime\": 1454682568,\n  \"value\": 30.4\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Gets temperature of a given sensor in a JSON format</p>",
    "error": {
      "examples": [
        {
          "title": "Error in case node is not a sensor:",
          "content": "{\n  \"error\": \"Node is not a sensor\"\n}",
          "type": "json"
        },
        {
          "title": "Error in case node is not ready:",
          "content": "{\n  \"error\": \"Node is not ready\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./flask-main.py",
    "groupTitle": "Sensors"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_marcoep_data_nextcloud_switch_edu_id_Institution_HEPIA_labo_IoT_Master_Module_code_nosync_Smart_Building_Complete_doc_main_js",
    "groupTitle": "_home_marcoep_data_nextcloud_switch_edu_id_Institution_HEPIA_labo_IoT_Master_Module_code_nosync_Smart_Building_Complete_doc_main_js",
    "name": ""
  }
] });
