from flask import request
from flask_restx import Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import PreferredOff

preferred_ns = Namespace('preferredOff', description = "A namespace for preferred time off")

preferredOff_model = preferred_ns.model(
    "prefferredOff",
    {
        "empId" : fields.Integer(),
        "prefId" : fields.Integer(),
        "startTime" : fields.String(),
        "endTime" : fields.String(),
        "day" : fields.String()
    }
)

@preferred_ns.route('/preferreds')
class PreferredOffResource(Resource):
    @preferred_ns.marshal_list_with(preferredOff_model)
    def get(self):
        """Get all preferredOff from DB"""

        preferreds = PreferredOff.query.all()

        return preferreds

    @preferred_ns.marshal_with(preferredOff_model)
    def post(self):
        """Create a new preferredOff"""
            
        data = request.get_json()
        new_preferred = PreferredOff(
            empId = data.get('empId'),
            prefId = data.get('prefId'),
            startTime = data.get('startTime'),
            endTime = data.get('endTime'),
            day= data.get('day')
        )
        new_preferred.save()
            
        return new_preferred, 201

@preferred_ns.route('/preferred/<int:id>')
class PreferredResource(Resource):
    @preferred_ns.marshal_with(preferredOff_model)
    def get(self, id):
        """Get a preferredOff by id"""

        prefered = PreferredOff.query.get_or_404(id)
            
        return prefered

    @preferred_ns.marshal_with(preferredOff_model)
    def put(self, id):
        """Update a preferredOff by id"""
            
        preferred_to_update = PreferredOff.query.get_or_404(id)
        data = request.get_json()
        preferred_to_update.update(data.get('empId'), data.get('prefId'), data.get('startTime'), data.get('endTime'), data.get('day'))
            
        return preferred_to_update

    @preferred_ns.marshal_with(preferredOff_model)
    def delete(self, id):
        """Deletes a preferredOff by id"""
        
        preferred_to_delete = PreferredOff.query.get_or_404(id)
        preferred_to_delete.delete()

        return preferred_to_delete 

