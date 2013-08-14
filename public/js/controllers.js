'use strict';

function StatsCtrl($scope, $http, $location) {
  $http.get('/stats').success(function (data, status, headers, config) {
    $scope.stats = data;


    var chart1 = {};
    chart1.type = "PieChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:330px; width:100%;";
    chart1.data = {"cols": [
        {id: "stat", label: "Status", type: "string"},
        {id: "val", label: "Value", type: "number"}
    ], "rows": [
        {c: [
            {v: "Timed out"},
            {v: data.failed}
        ]},
        {c: [
            {v: "Invalid tarball"},
            {v: data.rfailed}
        ]},
        {c: [
            {v: "Passed"},
            {v: data.ok}
        ]},
        {c: [
            {v: "Failed"},
            {v: data.nok}
        ]},
        {c: [
            {v: "Tests nonexistent"},
            {v: data.inexistent}
        ]}
    ]};

    chart1.options = {
        "fill": 20,
        "displayExactValues": true,
        "backgroundColor": { fill:'transparent' },
        "slices": {2:{color: '#109618'}, 3:{color: '#ff9900'}}
    };

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2,3,4]};
        } else {
            $scope.chart.view = {};
        }
    }

  });
}

function SearchCtrl($scope, $http, $location) {

  $scope.searchModule = function(module) {
    $http.get('/api/info/' + module).success(function (data, status, headers, config) {
      $scope.moddata = data;
      $scope.moddata.outputf = ansi_up.ansi_to_html(data.output);
      //console.log(ansi_up.ansi_to_html(data.output));
      //console.log(data);
    });
  };
}

StatsCtrl.$inject = ['$scope', '$http', '$location'];
SearchCtrl.$inject = ['$scope', '$http', '$location'];
