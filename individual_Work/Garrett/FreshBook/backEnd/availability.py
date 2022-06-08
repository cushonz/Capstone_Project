# Written by Garrett Marshall
# Availability namespace

from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Availability

availability_ns = Namespace('availability', description = "A namespace for availability")

availability_model = availability_ns.model(
    "Availability",
    {
        "empId" : fields.Integer(),
        "availId" : fields.Integer(),
        "startTime" : fields.String(),
        "endTime" : fields.String(),
        "day" : fields.String()
    }
)

@availability_ns.route('/availabilities')
class AvailabilitiesResource(Resource):
    @availability_ns.marshal_list_with(availability_model)
    def get(self):
        """Get all availabilities from DB"""

        availabilities = Availability.query.all()

        return availabilities

    @availability_ns.marshal_with(availability_model)
    def post(self):
        """Create a new availability"""
            
        data = request.get_json()
        new_availability = Availability(
            startTime = data.get('startTime'),
            endTime = data.get('endTime'),
            day= data.get('day')
        )
        new_availability.save()
            
        return new_availability, 201

@availability_ns.route('/availability/<int:id>')
class AvailabilityResource(Resource):
    @availability_ns.marshal_with(availability_model)
    def get(self, id):
        """Get an availability by id"""

        availability = Availability.query.get_or_404(id)
            
        return availability

    @availability_ns.marshal_with(availability_model)
    def put(self, id):
        """Update an availability by id"""
            
        availability_to_update = Availability.query.get_or_404(id)
        data = request.get_json()
        availability_to_update.update(data.get('startTime'), data.get('endTime'), data.get('day'))
            
        return availability_to_update

    @availability_ns.marshal_with(availability_model)
    def delete(self, id):
        """Deletes an availability by id"""
            
        availablity_to_delete = Availability.query.get_or_404(id)
        availablity_to_delete.delete()

        return availablity_to_delete 