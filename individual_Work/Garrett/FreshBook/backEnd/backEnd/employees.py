from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Employee

employee_ns = Namespace('employee', description = "A namespace for employees")

employee_model = employee_ns.model(
    "Employee",
    {
        "id" : fields.Integer(),
        "firstName" : fields.String(),
        "lastName" : fields.String(),
        "profRank" : fields.Integer()
    }
)

@employee_ns.route('/employees')
class EmployeesResource(Resource):
    @employee_ns.marshal_list_with(employee_model)
    def get(self):
        """Get all employees from DB"""

        employees = Employee.query.all()

        return employees

    @employee_ns.marshal_with(employee_model)
    def post(self):
        """Create a new employee"""
        
        data = request.get_json()
        new_employee = Employee(
            firstName = data.get('firstName'),
            lastName = data.get('lastName'),
            profRank= data.get('profRank')
        )
        new_employee.save()
        
        return new_employee, 201

@employee_ns.route('/employee/<int:id>')
class EmployeeResource(Resource):
    @employee_ns.marshal_with(employee_model)
    def get(self, id):
        """Get an employee by id"""

        employee = Employee.query.get_or_404(id)
        
        return employee

    @employee_ns.marshal_with(employee_model)
    def put(self, id):
        """Update an employee by id"""
        
        employee_to_update = Employee.query.get_or_404(id)
        data = request.get_json()
        employee_to_update.update(data.get('firstName'), data.get('lastName'), data.get('profRank'))
        
        return employee_to_update

    @employee_ns.marshal_with(employee_model)
    def delete(self, id):
        """Deletes an employee by id"""
        
        employee_to_delete = Employee.query.get_or_404(id)
        employee_to_delete.delete()

        return employee_to_delete 